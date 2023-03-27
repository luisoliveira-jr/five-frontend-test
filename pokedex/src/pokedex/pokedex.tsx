import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getPokemonDetails } from '../pokemon/services/getPokemonDetails';
import { listPokemons, ResultsPokemonListInterface } from '../pokemon/services/listPokemons';
import { PokemonDetail } from '../pokemon/interfaces/PokemonDetails';

interface PokedexProps { }

export const Pokedex: React.FC<PokedexProps> = () => {
    const [pokemons, setPokemons] = useState<ResultsPokemonListInterface[]>([]);
    const [selectedPokemon, setSelectedpokemon] = useState<ResultsPokemonListInterface | undefined>(undefined);
    const [selectedPokemonDetails, setSelectedpokemonDetails] = useState<PokemonDetail | undefined>(undefined);

    //Agora com a a API, utilizando o Axios
    useEffect(() => {
        listPokemons().then((response) => setPokemons(response.results))
     }, []);

     useEffect(() => {
        if(!selectedPokemon) return;

        getPokemonDetails(selectedPokemon.name).then((response) => setSelectedpokemonDetails(response))
     }, [selectedPokemon]);

    return (
        <div>
            <h1>Pokedex</h1>
            <br></br>
            <h2>Pokemons: </h2>
            {pokemons.map((pokemon) => <button onClick={() => setSelectedpokemon(pokemon)}>{pokemon.name}</button>)}
            <br></br>
            <h2>Pokemon selecionado: {selectedPokemon?.name || "Nenhum pokemon selecionado"}</h2>
            {JSON.stringify(selectedPokemonDetails, undefined, 2)}

        </div>
    );

};

export default Pokedex
