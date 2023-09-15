import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import tv from "../assets/tv.png";
import home from "../assets/newhome.png";
import video from "../assets/newvideo.png";
import cal from "../assets/newcal.png";
import series from "../assets/newseries.png";
import logout from "../assets/newlogout.png";

export default function Moviepage() {
  const { id } = useParams();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=98ae4acbc92a69d5c0c6d4d68f3992e5`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      })
      .catch(function (error) {
        console.error("Could'nt display movie details...");
        console.error(error);
      });
  }, [id]);

  return (
    <div className=" flex">
      <div className="left  w-2/6 ml-4 border-r-2 border-gray-300 rounded-3xl">
        <Link to="/">
          <div className="flex justify-center items-center mt-8 px-4 py-6">
            <img src={tv} alt="logo" className="h-10 w-10 mx-3" />
            <h1 className="mx-4 text-xl font-bold">MovieBox</h1>
          </div>
        </Link>

        <div className="flex justify-center items-center mt-16 py-7 bg-rose">
          <img src={home} alt="home" className="mr-6 w-8" />
          <Link to="/">
            <h2 className="text-gray-700  font-bold ml-4">Home</h2>
          </Link>
        </div>
        <div className="flex justify-center items-center mt-4 py-7 bg-rose">
          <img src={video} alt="video" className="mr-6 w-8" />
          <h2 className="text-gray-700 ml-3 font-bold">Movies</h2>
        </div>
        <div className="flex justify-center items-center mt-4 py-7 bg-rose">
          <img src={series} alt="series" className="mr-6 ml-4 w-8" />
          <h2 className="text-gray-700 ml-3 font-bold">TV Series</h2>
        </div>
        <div className="flex justify-center items-center mt-4 py-7 bg-rose">
          <img src={cal} alt="calender" className="mr-6 ml-4 w-8" />
          <h2 className="text-gray-700 ml-3 font-bold">Upcoming</h2>
        </div>
        <div className="py-4 px-5 mx-9 mt-20 border-2 border-red-400 rounded-2xl bg-pink-50">
          <h2 className=" mt-8 font-bold">
            Play movie quizzes and earn free tickets
          </h2>
          <p className="text-xs text-gray-600 mt-4 font-semibold">
            50k people are playing now.
          </p>
          <div className="flex justify-center mt-2">
            <button
              type="submit"
              className="mt-3  text-xs bg-pink-200 px-3 py-1 rounded-2xl text-red-900 font-bold"
            >
              Start playing
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center my-12 py-6 bg-rose">
          <img src={logout} alt="logout" className="mr-6 ml-4 w-8" />
          <h2 className="text-gray-700 ml-3 font-bold">Log out</h2>
        </div>
      </div>
      <div className=" mx-10 my-10">
        <div
          className="right rounded-3xl flex flex-col justify-center items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(https://image.tmdb.org/t/p/w1280/${movies.backdrop_path})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "500px",
            backgroundColor: "#000",
          }}
          key={movies.id}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-20 p-3 h-20 rounded-full bg-gray-500 opacity-70 pr-1 pl-1"
            >
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <h1 className="text-white text-2xl mt-6">Watch Trailer</h1>
        </div>
        <div className=" mt-16 px-5">
          <h2
            data-testid="movie-title"
            className="text-4xl font-bold text-red-700 "
          >
            {movies.title}
          </h2>
          <h2
            data-testid="movie-release-date"
            className="text-sm text-gray-500 font-bold mt-5"
          >
            Release date: {movies.release_date}
          </h2>
          <h2
            data-testid="movie-runtime"
            className="text-sm text-gray-500 font-bold mt-2"
          >
            Runtime: {movies.runtime} minutes
          </h2>
          <p data-testid="movie-overview" className="mt-4">
            {movies.overview}
          </p>
        </div>
      </div>
    </div>
  );
}
