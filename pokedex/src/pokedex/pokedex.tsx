//Pokedex imports
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { getPokemonDetails } from '../pokemon/services/getPokemonDetails';
import { listPokemons, ResultsPokemonListInterface } from '../pokemon/services/listPokemons';
import { PokemonDetail } from '../pokemon/interfaces/PokemonDetails';

//App bar imports
//import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Container, Pagination, TextField, Stack, Autocomplete, Grid, Card, CardActions, CardContent } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PokedexCard from './components/pokedexCard';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { PokeAppBar } from '../appBar/AppBar';
import { ProfileContext } from '../profile/contexts/ProfileContext';

interface PokedexProps { }

export const Pokedex: React.FC<PokedexProps> = () => {
    const { data } = useQuery(`listPokemons`, listPokemons);
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
                        {data?.results.map((pokemon) => (
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

        </div >
    );
};

export default Pokedex
