import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface PokedexProps { }

interface PokemonListInterface {
    name: string;
    url: string;
 }

export const Pokedex: React.FC<PokedexProps> = () => {
    const [pokemons, setPokemons] = useState<PokemonListInterface[]>([]);
    const [selectedPokemon, setSelectedpokemon] = useState<PokemonListInterface | undefined>(undefined);
    const [selectedPokemonDetails, setSelectedpokemonDetails] = useState<any | undefined>(undefined);

    //Agora com a a API, utilizando o Axios
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon').then((response) => setPokemons(response.data.results))
     }, []);

     useEffect(() => {
        if(!selectedPokemon) return;

        axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon.name}`).then((response) => setSelectedpokemonDetails(response.data))
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
