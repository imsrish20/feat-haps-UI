import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import { TextField, OutlinedInput, InputAdornment } from "@mui/material";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimeRangePicker } from "@mui/x-date-pickers-pro/DateTimeRangePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import { useTheme } from "@mui/material/styles";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat"; // Import the plugin
import { Button } from "@mui/material";
dayjs.extend(advancedFormat); // Extend dayjs with advancedFormat plugin

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const venueNames = [
  "Main Auditorium",
  "Football Ground",
  "MBA Auditorium",
  "DT Auditorium",
  "Basketball Ground",
];

const organizers = ["Organizer 1", "Organizer 2", "Organizer 3"];

const sponsors = ["Sponsor 1", "Sponsor 2", "Sponsor 3"];

const categories = ["Category 1", "Category 2", "Category 3"];

function getStyles(name, selectedNames, theme) {
  return {
    fontWeight:
      selectedNames.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function CreateNewEvent() {
  const theme = useTheme();
  const [data, setData] = React.useState({
    eventName: "",
    description: "",
    amount: "",
    eventDateTime: {
      startDate: null,
      endDate: null,
    },
    venueName: null,
    organizerName: [],
    sponsorName: [],
    categoryName: [],
    year: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "venueName" || name === "year") {
      setData({ ...data, [name]: value });
    } else {
      setData({ ...data, [name]: event.target.value });
    }
  };

  const handleDateChange = (dates) => {
    setData({
      ...data,
      eventDateTime: {
        startDate: dates[0],
        endDate: dates[1],
      },
    });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <HideAppBar>
        <Typography variant="h6" component="div">
          Create New Event
        </Typography>
      </HideAppBar>

      <Container>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" ,marginTop: "35px"}}>
          {/* Event Name */}
          <FormControl fullWidth>
            <TextField
              label="Event Name"
              name="eventName"
              value={data.eventName}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              style={{ maxWidth: 300, marginTop: 35 }}
            />
          </FormControl>

          {/* Description and Year in one line */}
          <div style={{ display: "flex", gap: "20px" ,marginTop: "15px"}}>
            <FormControl style={{ flex: 1 }}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                value={data.description}
                onChange={handleChange}
                variant="outlined"
              />
            </FormControl>

            <FormControl style={{ minWidth: 120 }}>
              <InputLabel id="year-label">Year</InputLabel>
              <Select
                labelId="year-label"
                id="year-select"
                value={data.year}
                onChange={(event) =>
                  handleChange({
                    target: { name: "year", value: event.target.value },
                  })
                }
                multiple
              >
                {[1, 2, 3, 4].map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          {/* Event Date & Time and Amount in one line */}
          <div style={{ display: "flex", gap: "20px" ,marginTop: "15px" }}>
            <FormControl style={{ flex: 1 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={["DateTimeRangePicker", "DateTimeRangePicker"]}
                >
                  <DemoItem
                    label="Event Date & Time"
                    component="DateTimeRangePicker"
                  >
                    <DateTimeRangePicker
                      value={[
                        data.eventDateTime.startDate,
                        data.eventDateTime.endDate,
                      ]}
                      onChange={handleDateChange}
                      viewRenderers={{
                        hours: renderTimeViewClock,
                        minutes: renderTimeViewClock,
                        seconds: renderTimeViewClock,
                      }}
                    />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>
            </FormControl>

            <FormControl style={{ flex: 1, marginTop: 40 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Amount
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label="Amount"
                name="amount"
                value={data.amount}
                onChange={handleChange}
              />
            </FormControl>
          </div>

          {/* Venue, Organizer, Sponsor, Category in one line */}
          <div style={{ display: "flex", gap: "20px" ,marginTop: "40px"}}>
            <FormControl style={{ flex: 1 }}>
              <InputLabel id="demo-single-venue-label">Venue</InputLabel>
              <Select
                labelId="demo-single-venue-label"
                id="demo-single-venue"
                value={data.venueName}
                onChange={handleChange}
                name="venueName"
                label="Venue"
                fullWidth
              >
                {venueNames.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl style={{ flex: 1 }}>
              <InputLabel id="demo-multiple-organizer-label">
                Organizer
              </InputLabel>
              <Select
                labelId="demo-multiple-organizer-label"
                id="demo-multiple-organizer"
                multiple
                value={data.organizerName}
                onChange={(event) =>
                  setData({ ...data, organizerName: event.target.value })
                }
                input={<OutlinedInput label="Organizer" />}
                MenuProps={{ PaperProps: { style: { maxHeight: 300 } } }}
              >
                {organizers.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, data.organizerName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl style={{ flex: 1 }}>
              <InputLabel id="demo-multiple-sponsor-label">Sponsor</InputLabel>
              <Select
                labelId="demo-multiple-sponsor-label"
                id="demo-multiple-sponsor"
                multiple
                value={data.sponsorName}
                onChange={(event) =>
                  setData({ ...data, sponsorName: event.target.value })
                }
                input={<OutlinedInput label="Sponsor" />}
                MenuProps={{ PaperProps: { style: { maxHeight: 300 } } }}
              >
                {sponsors.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, data.sponsorName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl style={{ flex: 1 }}>
              <InputLabel id="demo-multiple-category-label">
                Category
              </InputLabel>
              <Select
                labelId="demo-multiple-category-label"
                id="demo-multiple-category"
                multiple
                value={data.categoryName}
                onChange={(event) =>
                  setData({ ...data, categoryName: event.target.value })
                }
                input={<OutlinedInput label="Category" />}
                MenuProps={{ PaperProps: { style: { maxHeight: 300 } } }}
              >
                {categories.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, data.categoryName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "60px",
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
      </Container>
    </React.Fragment>
  );
}
const handleSubmit = (e) => {
  e.preventDefault();

  // You can add further logic here to submit the form data
};

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function HideAppBar(props) {
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
}
