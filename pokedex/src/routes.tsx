import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Pokedex from "./pokedex/pokedex";
import { PokemonDetails } from "./pokemon/pokemonDetails";

interface AppRoutesProps {

}

export const AppRoutes: React.FC<AppRoutesProps> = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Pokedex />} />
                <Route path="/pokemon/:name" element={<PokemonDetails />} />
            </Routes>
        </>
    );
};

export default AppRoutes;