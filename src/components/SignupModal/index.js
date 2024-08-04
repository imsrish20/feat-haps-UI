import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function SignupModal() {
  const [openSignup, setOpenSignup] = React.useState(false);
  const handleOpenSignup = () => {
    setOpenSignup(true);
  };
  const handleCloseSignup = () => {
    setOpenSignup(false);
  };

  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          sx={{ backgroundColor: "#FFA726", color: "white" }}
          onClick={handleOpenSignup}
        >
          Sign Up
        </Button>
      </Stack>

      <Modal
        open={openSignup}
        onClose={handleCloseSignup}
      >
        <Box sx={style}>
            HIII
        </Box>
      </Modal>
    </div>
  );
}
