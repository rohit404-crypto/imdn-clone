// MovieCard.js
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { categoryMovies } from "../services/api";
import {
  POPULAR_API_URL,
  TOPRATED_API_URL,
  UPCOMING_API_URL,
  NOWPLAYING_API_URL,
} from "../constants/constants";

const MovieCard = ({ Image_URL, title, vote_average, release_date , onClick }) => {
  // Check if Image_URL is truthy and not equal to 'null'
  console.log(Image_URL)
  if (!Image_URL) {
    return null;
  }

  return (
    <Card
      onClick={onClick}
      sx={{
        maxWidth: 200,
        backgroundColor: "#1b1b1b",
        borderRadius: 10,
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease-in-out",
        ":hover": { transform: "scale(1.05)" },
      }}
    >
      <CardMedia component="img" height="auto" src={Image_URL} alt="Movie Poster" />
      <CardContent>
        <Typography variant="h6" gutterBottom color="white" fontWeight={"bold"}>
          {title}
        </Typography>
        <Typography variant="body2" color="white">
          Release Date: {release_date}
        </Typography>
        <Typography variant="body2" color="white">
          Rating: {vote_average}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
