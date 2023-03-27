import axios from "axios";

export interface ResultsPokemonListInterface {
    name: string;
    url: string;
 }

 interface PokemonListInterface {
    count: number;
    next: null | string;
    previous: null | string;
    results: ResultsPokemonListInterface[]
 }

export async function listPokemons(): Promise<PokemonListInterface> {
    const endpoint = `${process.env.REACT_APP_POKEAPI}/pokemon`;
    const response = await axios.get<PokemonListInterface>(endpoint)
    return response.data;
}