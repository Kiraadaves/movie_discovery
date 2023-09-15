import { Link } from "react-router-dom";
import imdb from "../assets/imdb.png";
import rot from "../assets/rot.png";
import { useState } from "react";

const api_img = "https://image.tmdb.org/t/p/w500/";

export default function Card({ exam }) {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <Link to={`movie/${exam.id}`}>
        <div className="relative">
          <img
            data-testid="movie-poster"
            src={api_img + exam.poster_path}
            alt="poster_img"
            className="w-full h-50"
          />
          <button>
            <svg
              onClick={handleClick}
              style={{ color: active ? "red" : "white" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-16 h-16 absolute top-6 right-6  rounded-full bg-gray-500 opacity-70 p-3"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </button>
        </div>

        <div className="mt-4">
          <h2 data-testid="movie-title" className="text-lg font-bold">
            {exam.title}
          </h2>
          <div className=" flex justify-between mt-3">
            <div className="flex items-center">
              <img src={imdb} className="h-8 w-10" alt="rotten-tomatoes" />
              <p className="ml-2"> {exam.vote_average}</p>
            </div>
            <div className="flex items-center">
              <img src={rot} className="h-8 w-10 mr-3" alt="rotten-tomatoes" />
              <p>78%</p>
            </div>
          </div>
          <h2 className="my-2">
            Release Date:{" "}
            <span data-testid="movie-release-date">{exam.release_date}</span>
          </h2>
        </div>
      </Link>
    </>
  );
}
