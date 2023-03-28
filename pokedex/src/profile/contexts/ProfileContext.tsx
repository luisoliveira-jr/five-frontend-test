import React, { useState } from 'react';
import { PokemonDetail } from '../../pokemon/interfaces/PokemonDetails';

interface ProfileContextProps {
    favorites: PokemonDetail[];
    setfavorites: React.Dispatch<React.SetStateAction<PokemonDetail[]>>;
}

interface ProfileProviderProps {
    children: any;
  }

const INITIAL_FAVORITE_VALUE: PokemonDetail[] = [];

export const ProfileContext = React.createContext<ProfileContextProps>({
    favorites: INITIAL_FAVORITE_VALUE,
    setfavorites: () => console.warn(`setFavorites is not ready`)
})

export const ProfileProvider: React.FC<ProfileProviderProps> = ({ children }) => {
    const [favorites, setfavorites] = useState<PokemonDetail[]>(INITIAL_FAVORITE_VALUE)
    return (
        <ProfileContext.Provider value={{
            favorites,
            setfavorites
        }}>
            {children}

        </ProfileContext.Provider>
    );
};