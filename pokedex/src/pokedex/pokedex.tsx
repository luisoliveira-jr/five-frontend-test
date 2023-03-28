//Pokedex imports
import React from 'react'
import { listPokemons } from '../pokemon/services/listPokemons';
import { Box, Container, Grid } from '@mui/material';
import PokedexCard from './components/pokedexCard';
import { useQuery } from 'react-query';
import { PokeAppBar } from '../appBar/AppBar';

interface PokedexProps { }

export const Pokedex: React.FC<PokedexProps> = () => {
    const { data } = useQuery(`listPokemons`, listPokemons);

    return (
        <div>
            {/* App Bar */}
            <PokeAppBar></PokeAppBar>

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

        </div >
    );
};

export default Pokedex
