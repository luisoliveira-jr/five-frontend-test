import React, { useEffect, useState } from 'react'

interface PokedexProps { }

const pokemonsArray: string[] = ["Charmander", "Bulbasaur", "Butterfree", "Squirtle", "Pikachu"]

export const Pokedex: React.FC<PokedexProps> = () => {
    const [pokemons, setPkemons] = useState<string[]>(pokemonsArray);
    const [selectedPokemon, setSelectedpokemon] = useState<string | undefined>('');

    //Com array vazio executa somente quando instanciado
    useEffect(() => {
       alert("O componente foi instanciado")
    }, []);

    //Com variável dentro do array, ele observa e executa a cada atualização da variável.
    useEffect(() => {
        if (!selectedPokemon) return;
        alert(selectedPokemon)
    }, [selectedPokemon]);


    return (
        <div>
            <h1>Pokedex</h1>
            <br></br>
            <h2>Pokemons: </h2>
            {pokemons.map((pokemon) => <button onClick={() => setSelectedpokemon(pokemon)}>{pokemon}</button>)}
            <br></br>
            <h2>Pokemon selecionado: {selectedPokemon ? selectedPokemon : "Nenhum pokemon selecionado"}</h2>

        </div>
    );

};

export default Pokedex
