import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Pokedex from "./pokedex/Pokedex";
import { PokemonDetails } from "./pokemon/pokemonDetails";
import Profile from "./profile/Profile";

interface AppRoutesProps {

}

export const AppRoutes: React.FC<AppRoutesProps> = () => {
    return (
        <>
            <Routes>
                {/* <Route path="/" element={<Login />} /> */}
                <Route path="/" element={<Pokedex />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/pokemon/:name" element={<PokemonDetails />} />
            </Routes>
        </>
    );
};

export default AppRoutes;