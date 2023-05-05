import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MoviesCard from "./MoviesCard/MoviesCard";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);
  return (
    <div className="grid md:grid-cols-3 grid-cols-1">
      {movies.map((movie) => (
        <MoviesCard movie={movie} key={movie.show.id} />
      ))}
    </div>
  );
};

export default Movies;
