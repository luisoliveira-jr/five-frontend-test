import React from "react";
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

    function handleClick() {
        navigate(`/pokemon/${pokemon.name}`);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                onClick={handleClick}
                component="img"
                image={pokemon.sprites.other?.["official-artwork"].front_default}
                alt={pokemon.name}
            />
            <CardHeader
                onClick={handleClick}
                title={pokemon.name}
                subheader={pokemon.types.map((type) => <Chip label={type.type.name} variant="outlined" />)}
            />
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default PokedexCard;