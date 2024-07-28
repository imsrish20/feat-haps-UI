import React, { useState } from "react";
import { Tooltip, IconButton, Avatar, Menu, MenuItem, Typography, Box, Stack } from "@mui/material";
import LoginModal from "../LoginModal";
import SignupModal from "../SignupModal";
import { useAuth } from "../../AuthContext";
import { doSignInWithGoogle, doSignOut } from "../../Firebase/auth";
import { useNavigate } from 'react-router-dom';

function RightPanel() {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const { userLoggedIn } = useAuth(); // Access authentication state
    const navigate = useNavigate();

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleSignOut = async () => {
        await doSignOut();
        navigate("/"); // Redirect to home page after sign out
    };

    const handleGoogleLogin = async () => {
        try {
            await doSignInWithGoogle();
            navigate('/dashboard'); // Redirect to dashboard after successful login
        } catch (error) {
            alert("Something went wrong, please try again later.");
        }
    };

    return userLoggedIn ? (
        <div>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="User Avatar" src="/static/images/avatar.jpg" />
                </IconButton>
            </Tooltip>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={handleSignOut}>
                    <Typography textAlign="center">Logout</Typography>
                </MenuItem>
            </Menu>
        </div>
    ) : (
        <Box sx={{ flexGrow: 0 }}>
            <Stack spacing={2} direction="row">
                <LoginModal handleGoogleLogin={handleGoogleLogin} />
                <SignupModal />
            </Stack>
        </Box>
    );
}

export default RightPanel;