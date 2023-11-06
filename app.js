const express = require("express");

const app = express();

const port = 5000;

app.get("/api/movies/:id", (req, res) => {
  const movieId = req.params.id;

  const movie = movies.find((movie) => movie.id === parseInt(movieId));

  if (movie) {
    res.status(200).json(movie);
  } else {
    res.status(404).send("Not Found");
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to my favorite movie list");
});

app.get("/api/movies", (req, res) => {
  res.status(200).json(movies);
});

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    colors: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    colors: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
