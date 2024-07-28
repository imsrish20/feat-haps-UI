import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormControl, Stack, TextField } from "@mui/material";
import { URL } from "../Constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  width: 350,
};

export default function LoginModal({handleGoogleLogin}) {
  const [openLogin, setOpenLogin] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleOpenLogin = () => {
    setOpenLogin(true);
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  const handleChangeEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleChangePassword = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  const submitLogin = (e) => {
    e.preventDefault();
    let payload = { email: email, password: password };
    console.log(payload);
    axios.post(`${URL}/login`, payload)
      .then((response) => {
        if (response.status === 200) {
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error);
      });
  };

  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" color="inherit" onClick={handleOpenLogin}>
          Log In
        </Button>
      </Stack>

      <Modal open={openLogin} onClose={handleCloseLogin}>
        <form onSubmit={submitLogin}> {/* Added onSubmit to form */}
          <Box sx={style}>
            <h3>LogIn</h3>
            <FormControl fullWidth>
              <TextField
                label="Email ID"
                id="outlined-size-small"
                defaultValue=""
                type="email"
                placeholder="Please enter your email here."
                size="small"
                onChange={handleChangeEmail}
                required
              />
            </FormControl>
            <br />
            <br />
            <FormControl fullWidth>
              <TextField
                label="Password"
                id="outlined-size-small"
                defaultValue=""
                type="password"
                placeholder="Please enter your password here."
                size="small"
                onChange={handleChangePassword}
                required
              />
            </FormControl>
            <br />
            <br />
            <Stack spacing={1} direction="row" alignItems="center">
              <FormControl>
                <Typography sx={{ color: "gray", opacity: 0.6 }}>
                  Don't have an account yet?
                </Typography>
              </FormControl>
              <FormControl>
                <Typography
                  component="span"
                  sx={{
                    cursor: "pointer",
                    color: "inherit",
                  }}
                  onClick={() => {
                    // Handle click event here
                  }}
                >
                  Sign up
                </Typography>
              </FormControl>
              <FormControl>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#FFA726",
                    color: "white",
                  }}
                >
                  Login
                </Button>
              </FormControl>
            </Stack>
            <br />
            <Button
              onClick={handleGoogleLogin}
              variant="contained"
              color="primary"
              fullWidth
            >
              Login with Google
            </Button>
          </Box>
        </form>
      </Modal>
    </div>
  );
}
