import React, { useContext } from "react";
import styled from 'styled-components';
import { ResultsPokemonListInterface } from "../../pokemon/services/listPokemons";
import { useNavigate } from 'react-router-dom';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Chip, Collapse, IconButton, IconButtonProps, Typography } from "@mui/material";
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { PokemonDetail } from "../../pokemon/interfaces/PokemonDetails";
import { ProfileContext } from "../../profile/contexts/ProfileContext";

interface PokedexCardProps {
    pokemon: PokemonDetail
}

/* const Card = styled.section`
    padding: 4em;
    border-radius .5em;
    text-align: center;
    background: papayawhip;
`; */

export const PokedexCard: React.FC<PokedexCardProps> = ({ pokemon }) => {
    const navigate = useNavigate();
    const { setfavorites, favorites } = useContext(ProfileContext)

    function handleClick() {
        navigate(`/pokemon/${pokemon.name}`);
    };

    const addPokemonToFavorite = () => {
        setfavorites([... favorites, pokemon]);
    };

    const removePokemonFromFavorites = () => {
        setfavorites(favorites.filter((poke) => poke.name != pokemon.name));
    }

    const isFavorite = favorites.some((poke) => poke.name === pokemon.name);

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                onClick={handleClick}
                component="img"
                image={pokemon.sprites.other?.["official-artwork"].front_default}
                alt={pokemon.name}
            />
            <CardContent onClick={handleClick}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {pokemon.name}
                </Typography>
                <Typography variant="body2">
                {pokemon.types[0].type.name}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton onClick={() => isFavorite ? removePokemonFromFavorites() : addPokemonToFavorite()} aria-label="add to favorites" color={isFavorite ? `error` : `default`}>
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default PokedexCard;