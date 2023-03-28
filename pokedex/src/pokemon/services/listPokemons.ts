import axios from "axios";
import { PokemonDetail } from "../interfaces/PokemonDetails";
import { getPokemonDetails } from "./getPokemonDetails";

export interface ResultsPokemonListInterface {
    name: string;
    url: string;
}

interface PokemonListInterface {
    count: number;
    next: null | string;
    previous: null | string;
    results: PokemonDetail[]
}

export async function listPokemons(): Promise<PokemonListInterface> {
    const endpoint = `${process.env.REACT_APP_POKEAPI}/pokemon`;
    const response = await axios.get<PokemonListInterface>(endpoint)

    const promiseArr = response.data.results.map(({ name }) => getPokemonDetails(name))
    const resultsPromise = await Promise.all(promiseArr)

    return {
        ... response.data,
        results: resultsPromise
    };

}