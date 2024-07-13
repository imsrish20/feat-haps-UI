// LandingPage.jsx
import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import AdbIcon from '@mui/icons-material/Adb';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import LoginModal from '../LoginModal'; 
import SignupModal from '../SignupModal';
import EventCard from '../EventCard';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import { URL } from '../Constants';

const pages = ['Events', 'Blog'];

function LandingPage() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(`${URL}/events`).then((response) => {
      console.log(response.data.events);
      if (response.status === 200) {
        setEvents(response.data.events);
      } else {
        console.error('Something went wrong!');
      }
    });
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <AppBar position="absolute" sx={{ backgroundColor: '#fa9428' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <LogoDevIcon
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
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

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
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
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
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
            ></Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Stack spacing={2} direction="row">
                <LoginModal />
                <SignupModal />
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <PhotoGallery />
      <Grid container style={{ marginTop: 580 }}>
        {events.map((event, index) => ( // Added index to avoid warning
          <Grid key={index} xs={4} item> {/* Added item to fix Grid layout */}
            <center>
              <EventCard event={event} />
            </center>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default LandingPage;
