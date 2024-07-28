import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import pic1 from "../PhotoGallery/pic1.jpg";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupIcon from "@mui/icons-material/Group";
import { Button } from "@mui/material";
import { green } from "@mui/material/colors";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  return (
    <Link to={`/event/${event._id}`} style={{ textDecoration: 'none' }}>
      <Card sx={{ maxWidth: 380, marginTop: 10, boxShadow: 4 }}>
        <CardHeader
          title={
            <Typography variant="h6" sx={{ fontSize: "18px" }}>
              {event.name}
            </Typography>
          }
          subheader={new Date(event.startDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        />

        <CardMedia
          component="img"
          height="150"
          image={pic1}
          style={{ height: "350px", width: "300px" }}
        />
        <CardContent>
          <Stack direction="row" spacing={1}>
            <Chip
              icon={<AccessTimeIcon />}
              label={
                Math.floor(
                  (new Date(event.endDate) - new Date(event.startDate)) / 3600000
                ) + " hours"
              }
            />
            <Chip icon={<GroupIcon />} label={event.venue.capacity} />
          </Stack>
          <Typography
            sx={{
              fontSize: "13px",
              textAlign: "left",
              paddingBottom: "20px",
              marginLeft: "10px",
              marginTop: "10px",
            }}
          >
            <b>{event.organisers.map((ele) => ele.comittee).join(", ")}</b>
          </Typography>

          <Stack direction="row" spacing={0.1} sx={{ marginTop: -2 }}>
            <Chip
              label="M"
              sx={{
                ...(new Date(event.startDate).getDay() === 1
                  ? { background: green[200] }
                  : {}),
              }}
              variant="outlined"
            />
            <Chip
              label="T"
              sx={{
                ...(new Date(event.startDate).getDay() === 2
                  ? { background: green[200] }
                  : {}),
              }}
              variant="outlined"
            />
            <Chip
              label="W"
              sx={{
                ...(new Date(event.startDate).getDay() === 3
                  ? { background: green[200] }
                  : {}),
              }}
              variant="outlined"
            />
            <Chip
              label="T"
              sx={{
                ...(new Date(event.startDate).getDay() === 4
                  ? { background: green[200] }
                  : {}),
              }}
              variant="outlined"
            />
            <Chip
              label="F"
              sx={{
                ...(new Date(event.startDate).getDay() === 5
                  ? { background: green[200] }
                  : {}),
              }}
              variant="outlined"
            />
            <Chip
              label="S"
              sx={{
                ...(new Date(event.startDate).getDay() === 6
                  ? { background: green[200] }
                  : {}),
              }}
              variant="outlined"
            />
            <Chip
              label="S"
              sx={{
                ...(new Date(event.startDate).getDay() === 0
                  ? { background: green[200] }
                  : {}),
              }}
              variant="outlined"
            />
          </Stack>
        </CardContent>
        <CardActions disableSpacing sx={{ marginTop: -3 }}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="add to favorites" sx={{ marginLeft: "auto" }}>
            <Link to={`/event/register/${event._id}`} style={{ textDecoration: 'none' }}>
              <Button>Register</Button>
            </Link>
          </IconButton>
        </CardActions>
      </Card>
    </Link>
  );
}
