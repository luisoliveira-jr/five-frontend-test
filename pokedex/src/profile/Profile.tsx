import { Autocomplete, Box, Container, Grid, Pagination, Stack, TextField } from '@mui/material';
import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { PokeAppBar } from '../appBar/AppBar';
import PokedexCard from '../pokedex/components/pokedexCard';
import { listPokemons } from '../pokemon/services/listPokemons';
import { ProfileContext } from './contexts/ProfileContext';

interface ProfileProps {

}

export const Profile: React.FC<ProfileProps> = () => {
    const { favorites } = useContext(ProfileContext);

    //Remover
    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 }
    ];

    return (
        <div>
            {/* App Bar */}
            <PokeAppBar></PokeAppBar>
            {/* search */}
            <Container maxWidth="lg">
                <Box mt={2}>
                    <Stack spacing={2} sx={{ width: 300 }}>
                        <Autocomplete
                            freeSolo
                            id="free-solo-2-demo"
                            disableClearable
                            options={top100Films.map((option) => option.title)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Search input"
                                    InputProps={{
                                        ...params.InputProps,
                                        type: 'search',
                                    }}
                                />
                            )}
                        />
                    </Stack>
                </Box>
            </Container>

            {/* grid */}
            <Container maxWidth="lg">
                <Box mt={2}>
                    <Grid container spacing={1}>
                        {favorites?.map((pokemon) => (
                            <>
                                <Grid item xs={4} lg={4}>
                                    {/* Card */}
                                    <PokedexCard pokemon={pokemon} />
                                </Grid>
                            </>
                        ))}
                    </Grid>
                </Box>
            </Container>

            {/* Pagination */}
            <Container maxWidth="lg">
                <Box margin={2}>
                    <Pagination count={3} />
                </Box>
            </Container>
        </div>
    );
};

export default Profile;