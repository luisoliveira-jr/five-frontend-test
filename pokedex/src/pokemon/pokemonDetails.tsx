import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppBar, Autocomplete, Box, Button, Chip, Container, IconButton, ImageList, ImageListItem, Pagination, Stack, TextField, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { PokemonDetail } from './interfaces/PokemonDetails';
import { getPokemonDetails } from './services/getPokemonDetails';
import { type } from 'os';
import styled from 'styled-components';
import { PokeAppBar } from '../appBar/AppBar';
import { ProfileContext } from '../profile/contexts/ProfileContext';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface PokemonDetailsProps {

}

export const PokemonDetails: React.FC<PokemonDetailsProps> = () => {
    const { name } = useParams();
    const [selectedPokemonDetails, setSelectedpokemonDetails] = useState<PokemonDetail | undefined>(undefined);
    const { setfavorites, favorites } = useContext(ProfileContext)

    const isFavorite = favorites.some((poke) => poke.name === selectedPokemonDetails?.name);

    const Card = styled.section`
    text-align: center;`;

    useEffect(() => {
        if (!name) return;

        getPokemonDetails(name).then((response) => setSelectedpokemonDetails(response))
    }, [name]);

    const addPokemonToFavorite = () => {
        if (!selectedPokemonDetails) return;
        setfavorites([...favorites, selectedPokemonDetails]);
    };

    const removePokemonFromFavorites = () => {
        setfavorites(favorites.filter((poke) => poke.name != selectedPokemonDetails?.name));
    }

    return (
        <div>
            {/* App Bar */}
            <PokeAppBar></PokeAppBar>

            {/* search */}
            <Container maxWidth="lg">
                <Box mt={2}>
                    <Stack spacing={2} sx={{ width: 300 }}>

                    </Stack>
                </Box>
            </Container>

            {/* grid */}
            <Container maxWidth="lg">
                <Box
                    sx={{ flexGrow: 1 }}
                    style={{ alignItems: 'center' }}
                    display="flex"
                    flexDirection="row">
                    <Typography variant='h2'>
                        {selectedPokemonDetails?.name}
                    </Typography>
                    <IconButton  onClick={() => isFavorite ? removePokemonFromFavorites() : addPokemonToFavorite()} aria-label="add to favorites" color={isFavorite ? `error` : `default`}>
                        <FavoriteIcon />
                    </IconButton>
                </Box>

                <Typography variant='h5'>
                    {selectedPokemonDetails?.types.map((type) => type.type.name).join(', ')}
                </Typography>

                <Card>
                    <img
                        src={`${selectedPokemonDetails?.sprites.other?.['official-artwork'].front_default}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${selectedPokemonDetails?.sprites.other?.['official-artwork'].front_default}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={name}
                        loading="lazy"
                    />
                </Card>

                <Box display="flex" flexDirection="row">
                    <Typography>
                        Height:
                    </Typography>
                    <Typography>
                        {selectedPokemonDetails?.height}
                    </Typography>
                </Box>
                <Box display="flex" flexDirection="row">
                    <Typography>
                        Weight:
                    </Typography>
                    <Typography>
                        {selectedPokemonDetails?.weight}
                    </Typography>
                </Box>
                <Box display="flex" flexDirection="row">
                    <Typography>
                        Abilities:
                    </Typography>
                    <Typography>
                        {selectedPokemonDetails?.abilities.map((ability) => ability.ability.name).join(', ')}
                    </Typography>
                </Box>

            
        </Container>

        </div >
    );

};