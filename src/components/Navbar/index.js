// Navbar.js
import React, { useState } from 'react';
import { AppBar, Container, Toolbar, Typography, IconButton, Menu, MenuItem, Box, Button } from '@mui/material';
import { Menu as MenuIcon, Adb as AdbIcon, LogoDev as LogoDevIcon } from '@mui/icons-material';
import RightPanel from './rightPanel';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const navigate = useNavigate()


    const navigateToEvents = () => {
        navigate("/events");
    }

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="absolute" sx={{ backgroundColor: '#fa9428' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <LogoDevIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 600,
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        Feat HAPs
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="open navigation menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >

                                <MenuItem onClick={navigateToEvents}>
                                    <Typography textAlign="center">Events</Typography>
                                </MenuItem>
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Feat HAPs
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                onClick={navigateToEvents}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Events
                            </Button>
                    </Box>

                    <RightPanel />
                </Toolbar>
            </Container>
        </AppBar>
    );
}