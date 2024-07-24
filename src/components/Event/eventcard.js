import React from "react";
import Paper from "@mui/material/Paper";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Button, Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  const remainingSeats = event.venue.capacity - event.bookedSeats;
  const eventDay = new Date(event.startDate).toLocaleDateString("en-US", {
    weekday: "long",
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        margin: "16px 0", // Add some margin for spacing between cards
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "100%",
          maxWidth: "1000px",
          padding: "16px",
          borderRadius: "8px", // Rounded corners for a more card-like appearance
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <CardHeader
            title={
              <Typography variant="h6" sx={{ fontSize: "20px" }}>
                {event.name}
              </Typography>
            }
            subheader={
              <Typography variant="body2" color="textSecondary">
                {event.description}
              </Typography>
            }
            
          />
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Stack direction="row" spacing={3}>
              <Typography>
                Join us on:{" "}
                {new Date(event.startDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                {"    "} to {"    "}
                {new Date(event.endDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Typography>
              <Typography>{eventDay}</Typography>
              <Typography>
                Duration:{" "}
                <Chip
                  icon={<AccessTimeIcon />}
                  label={
                    Math.floor(
                      (new Date(event.endDate) - new Date(event.startDate)) /
                        3600000
                    ) + " hours"
                  }
                  sx={{ marginLeft: "8px" }}
                />
              </Typography>
            </Stack>

            <Stack direction="row" spacing={8} sx={{ marginTop: "15px" }}>
              <Typography
                sx={{
                  fontSize: "16px",
                  textAlign: "left",
                  paddingBottom: "20px",
                  marginTop: "20px",
                }}
              >
            Venue: {event.venue ? event.venue.name : ""}
              </Typography>

              <Typography
                sx={{
                  fontSize: "16px",
                  textAlign: "left",
                  paddingBottom: "20px",
                  marginTop: "15px",
                }}
              >
                Organisers:{" "}
                {event.organisers.map((ele) => ele.comittee).join(", ")}
              </Typography>

              <Typography
                sx={{
                  fontSize: "16px",
                  textAlign: "left",
                  paddingBottom: "20px",
                }}
              >
                Sponsors:{" "}
                {event.sponsers
                  ? event.sponsers.map((s) => s.name).join(", ")
                  : ""}
              </Typography>
              <Box display="flex" justifyContent="flex-end">
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    marginLeft: "160px",
                  }}
                >
                  ₹{event.fee}
                </Typography>
                <Link
                  to="/event/register"
                  style={{ textDecoration: "none", marginLeft: "16px" }}
                >
                  <Button
                    variant="contained"
                    size="small"
                    style={{ backgroundColor: "orange", color: "white", size:"large" }}
                  >
                    Book
                  </Button>
                </Link>
              </Box>
            </Stack>
          </CardContent>
        </Box>
      </Paper>
    </Box>
  );
}
