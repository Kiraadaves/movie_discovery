import Card from "./Card";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const api_url =
  "https://api.themoviedb.org/3/movie/popular?api_key=98ae4acbc92a69d5c0c6d4d68f3992e5";

export default function Body() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results.slice(0, 10));
      });
  }, []);
  return (
    <div className="featured ">
      <div className="title flex flex-row font-bold pb-0 justify-between items-center">
        <h2 className="text-4xl">Top 10 Movies</h2>
        <Link to="/" className="text-red-600 text-xl">
          See More{" "}
          <span>
            <ArrowForwardIosRoundedIcon className="pb-1" />
          </span>
        </Link>
      </div>
      <div className="card gap-14 grid lg:grid-cols-4 md:grid-cols-2  ">
        {movies.map((exam) => (
          <div className=" mt-9 flex flex-col">
            
              <Card
                data-testid="movie-card"
                key={exam.id}
                exam={exam}
              />
            
          </div>
        ))}
      </div>
    </div>
  );
}
