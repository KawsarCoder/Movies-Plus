import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleMovie = () => {
  const { genres, id, image, name, runtime, type, language, summary } =
    useLoaderData();
  const movieUrl = [];
  for (var mov in image) {
    movieUrl.push(image[mov]);
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-12">
      <input type="checkbox" id="book-now-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="book-now-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="font-bold">Movie Ticket Form: </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Movie Name</span>
                </label>
                <input
                  type="text"
                  disabled
                  placeholder={name}
                  className="input input-bordered "
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Movie Price</span>
                </label>
                <input
                  type="text"
                  disabled
                  placeholder="5$"
                  className="input input-bordered "
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Runtime</span>
                </label>
                <input
                  type="text"
                  disabled
                  placeholder={runtime}
                  className="input input-bordered "
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-white">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card bg-rose-500 p-6 text-white shadow-xl m-6 md:col-start-5 md:col-end-9 ">
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

          <p>{summary}</p>
          <div className="badge badge-accent text-white font-bold py-3 my-3">
            Runtime: {runtime}
          </div>
          <span>Language: {language}</span>
          <span>Type: {type}</span>
          <div className="card-actions justify-end">
            <label
              htmlFor="book-now-modal"
              className="btn btn-primary text-white"
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
