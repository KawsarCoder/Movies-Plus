import React from "react";

const SingleMovie = ({ movie }) => {
  const { genres, image, name, runtime, rating, summary } = movie.show;
  //   console.log(movie.show);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="badge badge-primary"></div>

          <p>{summary}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
