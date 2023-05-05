import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SingleMovie from "./SingleMovie/SingleMovie";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);
  return (
    <div>
      {movies.map((movie) => (
        <SingleMovie movie={movie} key={movie.show.id} />
      ))}
    </div>
  );
};

export default Movies;
