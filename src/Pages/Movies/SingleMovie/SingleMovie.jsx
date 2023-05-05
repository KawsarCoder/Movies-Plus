import React from "react";

const SingleMovie = ({ movie }) => {
  const { genres, image, name, runtime, rating, summary } = movie.show;
  const movieUrl = [];
  for (var mov in image) {
    movieUrl.push(image[mov]);
  }
  // console.log(movieUrl[0]);
  return (
    <div>
      <div className="card bg-rose-500 p-6 text-white shadow-xl m-6">
        <figure>
          <img
            src={
              movieUrl.length > 0
                ? movieUrl[0]
                : "https://img.freepik.com/free-vector/cinema-label-poster_603843-2892.jpg?w=330"
            }
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <div className="badge badge-primary">
            {" "}
            Genres:{" "}
            {genres.map((genre) => (
              <span key={genre}>{genre},</span>
            ))}
          </div>

          <p>
            {summary.length > 100 ? summary.slice(0, 100) + "... " : summary}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary text-white">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
