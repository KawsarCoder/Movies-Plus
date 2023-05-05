import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SingleMovie from "../../Movies/SingleMovie/SingleMovie";

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
          <></>
        ) : (
          <>
            {movies.slice(0, 3).map((movie) => (
              <SingleMovie movie={movie} key={movie.show.id} />
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
