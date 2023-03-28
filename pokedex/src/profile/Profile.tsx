import { Box, Container, Grid } from '@mui/material';
import React, { useContext } from 'react';
import { PokeAppBar } from '../appBar/AppBar';
import PokedexCard from '../pokedex/components/pokedexCard';
import { ProfileContext } from './contexts/ProfileContext';

interface ProfileProps {

}

export const Profile: React.FC<ProfileProps> = () => {
    const { favorites } = useContext(ProfileContext);

    return (
        <div>
            {/* App Bar */}
            <PokeAppBar></PokeAppBar>

            {/* grid */}
            <Container maxWidth="lg">
                <Box mt={2}>
                    <Grid container spacing={1}>
                        {favorites?.map((pokemon) => (
                            <>
                                <Grid item xs={4} lg={4}>
                                    {/* Card */}
                                    <PokedexCard pokemon={pokemon} />
                                </Grid>
                            </>
                        ))}
                    </Grid>
                </Box>
            </Container>

        </div>
    );
};

export default Profile;