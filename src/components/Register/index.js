import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import { TextField, Button } from "@mui/material";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import qrCodeImage from "../../OQ-Code-Payments.png";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import TransgenderIcon from "@mui/icons-material/Transgender";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/joy/RadioGroup";
import Radio from "@mui/joy/Radio";
import Sheet from "@mui/joy/Sheet";
import FormLabel from "@mui/joy/FormLabel";
import { URL } from "../Constants";

dayjs.extend(advancedFormat);

const CreateNewUser = () => {
  const [data, setData] = useState({
    userName: "",
    eventName: "",
    branch: "",
    year: [],
    emailId: "",
    phoneNo: "",
    gender: "",
  });
  const [errors, setErrors] = useState({
    emailId: "",
    phoneNo: "",
  });
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${URL}/events`)
      .then((response) => {
        if (response.status === 200) {
          console.log("Events data:", response.data.events);
          setEvents(response.data.events);
        } else {
          console.error("Something went wrong!");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
        setLoading(false);
      });
  }, []);

  const event = events.find((event) => event._id === id);
  console.log("Matched event:", event);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!event) {
    return <div>Event not found {id}</div>;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: Array.isArray(value) ? value : [value] });

    // Validation logic for email and phone number
    if (name === "emailId") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors({
        ...errors,
        emailId: emailPattern.test(value) ? "" : "Invalid email address",
      });
    }

    if (name === "phoneNo") {
      const phonePattern = /^\d{10}$/; // Assumes a 10-digit phone number
      setErrors({
        ...errors,
        phoneNo: phonePattern.test(value) ? "" : "Invalid phone number",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission
    console.log("Form data submitted:", data);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <HideAppBar>
        <Typography variant="h6" component="div">
          Register for {event.name}
        </Typography>
      </HideAppBar>

      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: "60px",
          }}
        >
          {/* Name and Event Name in one line */}
          <div style={{ display: "flex", gap: "20px" }}>
            <FormControl style={{ flex: 1 }}>
              <TextField
                fullWidth
                label="Name"
                name="userName"
                value={data.userName}
                onChange={handleChange}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ maxWidth: 300, marginTop: 0 }}
              />
            </FormControl>
            <FormControl style={{ flex: 1 }}>
              <TextField
                disabled
                id="outlined-disabled"
                label={event.name}
                defaultValue={event.name}
              />
            </FormControl>
          </div>

          {/* Year and Branch Dropdowns */}
          <div style={{ display: "flex", gap: "20px", marginTop: "15px" }}>
            <FormControl style={{ flex: 1 }}>
              <InputLabel>Year</InputLabel>
              <Select
                value={data.year}
                onChange={handleChange}
                name="year"
                variant="outlined"
                fullWidth
              >
                <MenuItem value={1}>1st Year</MenuItem>
                <MenuItem value={2}>2nd Year</MenuItem>
                <MenuItem value={3}>3rd Year</MenuItem>
                <MenuItem value={4}>4th Year</MenuItem>
              </Select>
            </FormControl>
            <FormControl style={{ flex: 1 }}>
              <InputLabel>Branch</InputLabel>
              <Select
                value={data.branch}
                onChange={handleChange}
                name="branch"
                variant="outlined"
                fullWidth
              >
                <MenuItem value="Computer Science">Computer Science</MenuItem>
                <MenuItem value="Electrical Engineering">
                  Electrical Engineering
                </MenuItem>
                <MenuItem value="Mechanical Engineering">
                  Mechanical Engineering
                </MenuItem>
                <MenuItem value="Civil Engineering">
                  Civil Engineering
                </MenuItem>
                {/* Add more options as needed */}
              </Select>
            </FormControl>
          </div>

          {/* Email ID and Phone Number */}
          <div style={{ display: "flex", gap: "20px", marginTop: "15px" }}>
            <FormControl style={{ flex: 1 }}>
              <TextField
                fullWidth
                label="Email ID"
                name="emailId"
                value={data.emailId}
                onChange={handleChange}
                variant="outlined"
                error={!!errors.emailId}
                helperText={errors.emailId}
              />
            </FormControl>
            <FormControl style={{ flex: 1 }}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phoneNo"
                value={data.phoneNo}
                onChange={handleChange}
                variant="outlined"
                error={!!errors.phoneNo}
                helperText={errors.phoneNo}
              />
            </FormControl>
          </div>

          {/* Gender Selection */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginTop: "15px",
            }}
          >
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender"
                defaultValue="male"
                orientation="horizontal"
                sx={{ gap: 2 }}
                onChange={handleChange}
              >
                {[
                  { value: 'male', label: 'Male', icon: <MaleIcon /> },
                  { value: 'female', label: 'Female', icon: <FemaleIcon /> },
                  { value: 'others', label: 'Others', icon: <TransgenderIcon /> },
                ].map((option) => (
                  <Sheet
                    component="label"
                    key={option.value}
                    variant="outlined"
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      boxShadow: 'sm',
                      borderRadius: 'md',
                    }}
                  >
                    <Radio
                      value={option.value}
                      variant="soft"
                      sx={{
                        mb: 2,
                      }}
                    />
                    {option.icon}
                    <Typography level="body-sm" sx={{ mt: 1 }}>
                      {option.label}
                    </Typography>
                  </Sheet>
                ))}
              </RadioGroup>
            </FormControl>

            {/* QR Code Preview */}
            <div
              style={{
                width: 200,
                height: 200,
                border: "2px dashed #ccc",
                borderRadius: 4,
                overflow: "hidden",
                marginLeft: "650px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={qrCodeImage}
                alt="QR Code"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "cover",
                  display: qrCodeImage ? "block" : "none",
                }}
              />
              <span
                style={{
                  color: "#ccc",
                  display: qrCodeImage ? "none" : "block",
                }}
              >
                QR Code Preview (200x200)
              </span>
            </div>
          </div>
          <div style={{ marginTop: "-20px", marginLeft: "985px" }}>
            <Typography>Pay Here</Typography>
          </div>
          {/* Submit Button */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{
                backgroundColor: "#FFA726",
                color: "white",
                "&:hover": {
                  backgroundColor: "#FF9800",
                },
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

const HideOnScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const HideAppBar = (props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar style={{ backgroundColor: "orange" }}>
          <Toolbar>{props.children}</Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
};

export default CreateNewUser;
