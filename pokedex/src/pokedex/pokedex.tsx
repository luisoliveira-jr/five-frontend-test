import React, { useState } from 'react'

interface PokedexProps { }

const pokemonsArray: string[] = ["Charmander", "Bulbasaur", "Butterfree", "Squirtle", "Pikachu"]

export const Pokedex: React.FC<PokedexProps> = () => {
    const [pokemons, setPkemons] = useState<string[]>(pokemonsArray);
    const [selectedPokemon, setSelectedpokemon] = useState<string | undefined>('');


    return (
        <div>
            <h1>Pokedex</h1>
            <br></br>
            <h2>Pokemons: </h2>
            {pokemons.map((pokemon) => <button onClick={() => setSelectedpokemon(pokemon)}>{pokemon}</button>)}
            <br></br>
            <h2>Pokemon selecionado: {selectedPokemon}</h2>

        </div>
    );

};

export default Pokedex
