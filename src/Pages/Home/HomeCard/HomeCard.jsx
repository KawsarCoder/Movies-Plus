import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import MoviesCard from "../../Movies/MoviesCard/MoviesCard";

const HomeCard = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-3">
        {" "}
        {movies.length < 4 ? (
          <div className="flex justify-center">
            <progress className="progress w-56"></progress>
          </div>
        ) : (
          <>
            {movies.slice(0, 3).map((movie) => (
              <MoviesCard movie={movie} key={movie.show.id} />
            ))}
          </>
        )}
      </div>
      <div className="flex justify-center my-10">
        <Link to="/movies" className="btn btn-outline btn-success">
          See All
        </Link>
      </div>
    </div>
  );
};

export default HomeCard;
