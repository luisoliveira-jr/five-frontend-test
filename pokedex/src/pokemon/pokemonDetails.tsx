import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PokemonDetail } from './interfaces/PokemonDetails';
import { getPokemonDetails } from './services/getPokemonDetails';

interface PokemonDetailsProps {

}

export const PokemonDetails: React.FC<PokemonDetailsProps> = () => {
    const { name } = useParams();
    const [selectedPokemonDetails, setSelectedpokemonDetails] = useState<PokemonDetail | undefined>(undefined);

    useEffect(() => {
       if (!name) return;

        getPokemonDetails(name).then((response) => setSelectedpokemonDetails(response))
    }, [name]);

    return (
        <Box sx={{ flexGrow: 1 }} margin={5}>
            <img src={selectedPokemonDetails?.sprites.other?.home.front_default} alt="" />
            <img src={selectedPokemonDetails?.sprites.other?.dream_world.front_default} alt="" />
            <img src={selectedPokemonDetails?.sprites.other?.['official-artwork'].front_default} alt="" />
            poke: {name}
            {/* <h2>Pokemon selecionado: {selectedPokemon?.name || "Nenhum pokemon selecionado"}</h2> */}
            {JSON.stringify(selectedPokemonDetails, undefined, 2)}
        </Box>
    );

};