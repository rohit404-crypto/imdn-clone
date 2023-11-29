import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { categoryMovies } from "../services/api";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getData = async (id) => {
      try {
        const response = await categoryMovies(
          `https://api.themoviedb.org/3/movie/${id}?api_key=6ffdd760694115f3d88d9b01e1af281f`
        );
        setMovie(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData(id);
  }, [id]);

  const {
    backdrop_path,
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
  } = movie;

  return (
    <div style={{ position: "relative", paddingTop: 10, display: "flex",flexDirection: "column", alignItems: "center" ,justifyContent:'center' }}>
      {/* Backdrop Image */}
      <CardMedia
        component="img"
        alt="Backdrop Image"
        height="100%"
        image={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        sx={{
          objectFit: "cover",
          objectPosition: "top",
          width: "100%",
          position: "relative",
        }}
      />

      {/* Movie Details */}
      <Card sx={{ display: "flex", marginTop: 2, backgroundColor: "#1b1b1b" }}>
        {/* Movie Poster */}
        {/* <CardMedia
          component="img"
          alt="Movie Poster"
          image={`https://image.tmdb.org/t/p/original${poster_path}`}
          sx={{
            width: "100%", // Make the poster full-width
            maxWidth: 300, // Set a maximum width
            height: "auto", // Maintain aspect ratio
            objectFit: "cover",
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)", // Center horizontally
          }} */}
        /

        {/* Movie Info */}
        <div
          sx={{
            position: "relative",
            zIndex: 1,
            backgroundColor: "#1b1b1b",
            padding: "20px",
          }}
        >
          <Typography
            variant="h4"
            color="#FFC600"
            fontWeight="bold"
            gutterBottom
          >
            {original_title}
          </Typography>
          <Typography variant="subtitle1" color="white" gutterBottom>
            Release Date: {release_date}
          </Typography>
          <Typography variant="subtitle1" color="white" gutterBottom>
            Average Vote: {vote_average}
          </Typography>
          <Typography
            variant="body1"
            color="white"
            paragraph
            sx={{ fontWeight: 700 }}
          >
            {overview}
          </Typography>
        </div>
      </Card>
    </div>
  );
};

export default MovieDetail;
