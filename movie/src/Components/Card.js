import { Link } from "react-router-dom";
import imdb from "../assets/imdb.png";
import rot from "../assets/rot.png";

const api_img = "https://image.tmdb.org/t/p/w500/";

export default function Card({
  exam
}) {
    
  return (
    <>
      <Link to={`movie/${exam.id}`}>
        <div>
          <img
            data-testid="movie-poster"
            src={api_img + exam.poster_path}
            alt="poster_img"
            className="w-full h-50"
          />
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
          <h2 data-testid="movie-release-date" className="my-2">
            
            Release Date: {exam.release_date}
          </h2>
        </div>
      </Link>
    </>
  );
}
