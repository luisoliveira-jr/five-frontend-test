//Pokedex imports
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getPokemonDetails } from '../pokemon/services/getPokemonDetails';
import { listPokemons, ResultsPokemonListInterface } from '../pokemon/services/listPokemons';
import { PokemonDetail } from '../pokemon/interfaces/PokemonDetails';

//App bar imports
//import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Container, Pagination, TextField, Stack, Autocomplete, Grid, Card, CardActions, CardContent } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

interface PokedexProps { }

export const Pokedex: React.FC<PokedexProps> = () => {
    const [pokemons, setPokemons] = useState<ResultsPokemonListInterface[]>([]);
    const [selectedPokemon, setSelectedpokemon] = useState<ResultsPokemonListInterface | undefined>(undefined);
    const navigate = useNavigate();  

    //Agora com a a API, utilizando o Axios
    useEffect(() => {
        listPokemons().then((response) => setPokemons(response.results))
    }, []);

   
    function handleClick(pokemon: ResultsPokemonListInterface) {
        navigate(`/pokemon/${pokemon.name}`);
    }
    
    //Remover
    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 }
    ];

    return (
        <div>
            {/* App Bar */}
            <Box sx={{ flexGrow: 1 }}>
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
                            Pokedex
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>

            {/* search */}
            <Box sx={{ flexGrow: 1 }} margin={2}>
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

            {/* grid */}
            <Box sx={{ flexGrow: 1 }} >
                <Grid container>
                    {pokemons.map((pokemon) => (
                        <>
                            <Grid item xs={6}>
                                <Box margin={1}>
                                    <Card variant="outlined">
                                        <React.Fragment>
                                            <CardContent>
                                                <Typography variant="h5" component="div">
                                                    {pokemon.name}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button onClick={() => handleClick(pokemon)} size="small">Abrir</Button>
                                            </CardActions>
                                        </React.Fragment>
                                    </Card>
                                </Box>
                            </Grid>
                        </>
                    ))}
                </Grid>
            </Box>

            {/* Pagination */}
            <Box sx={{ flexGrow: 1 }} margin={5}>
                <Pagination count={10} />
            </Box>

        </div>
    );
};

export default Pokedex
