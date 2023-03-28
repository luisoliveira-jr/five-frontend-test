import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppBar, Autocomplete, Box, Button, Container, IconButton, ImageList, ImageListItem, Pagination, Stack, TextField, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { PokemonDetail } from './interfaces/PokemonDetails';
import { getPokemonDetails } from './services/getPokemonDetails';
import { type } from 'os';
import styled from 'styled-components';

interface PokemonDetailsProps {

}

export const PokemonDetails: React.FC<PokemonDetailsProps> = () => {
    const { name } = useParams();
    const [selectedPokemonDetails, setSelectedpokemonDetails] = useState<PokemonDetail | undefined>(undefined);

    const Card = styled.section`
    text-align: center;`;

    useEffect(() => {
        if (!name) return;

        getPokemonDetails(name).then((response) => setSelectedpokemonDetails(response))
    }, [name]);

    return (
        <div>
            {/* App Bar */}
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {name}
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>


            {/* search */}
            <Container maxWidth="lg">
                <Box mt={2}>
                    <Stack spacing={2} sx={{ width: 300 }}>

                    </Stack>
                </Box>
            </Container>

            {/* grid */}
            <Container maxWidth="lg">
                <Box sx={{ flexGrow: 1 }} style={{
                    alignItems: 'center',

                }}>
                    <Typography variant='h2'>
                        {selectedPokemonDetails?.name}
                    </Typography>

                    {selectedPokemonDetails?.types.map((type) => <Typography variant='h5'>{type.type.name}</Typography>)}

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
                        {selectedPokemonDetails?.abilities.map((ability) => <Typography>{ability.ability.name}</Typography>)}
                    </Box>

                </Box>
            </Container>

        </div >
    );

};