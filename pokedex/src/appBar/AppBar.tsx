import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';

interface PokeAppBarProps {

}

export const PokeAppBar: React.FC<PokeAppBarProps> = () => {
    const home = useNavigate();
    const profile = useNavigate();

    function homeHandleClick() {
        home(`/`);
    };

    function profileHandleClick() {
        profile(`/profile`);
    };
    
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Pokedex
                    </Typography>
                    <Button onClick={homeHandleClick} color="inherit">Home</Button>
                    <Button onClick={profileHandleClick} color="inherit">Profile</Button>
                    <Button onClick={homeHandleClick} color="inherit">Exit</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default AppBar;