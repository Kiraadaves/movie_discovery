import Navigation from "../Components/Navigation";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

import React, { useState, useEffect } from "react";



const api_url =
  "https://api.themoviedb.org/3/movie/335977?api_key=98ae4acbc92a69d5c0c6d4d68f3992e5";

    
   
export default function Details() {
    const [banner, setBanner] = useState(null);

    useEffect(() => {
      fetch(api_url)
        .then((res) => res.json())
        .then((data) => {
          setBanner(data);
          console.log(data);
        });
    }, []);
  return (
    <div>
      <div
        className="banner-single"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(https://image.tmdb.org/t/p/w1280/${banner.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "60vh",
          backgroundColor: "#000",
        }}
        key={banner.id}
      >
        <Navigation />
        <div>
          <Link to="">
            <PlayCircleFilledRoundedIcon />
            <p>Watch Trailer</p>
          </Link>
        </div>
      </div>
      <div>
        <h2 data-testid="movie-title">{banner.title}</h2>
        <p data-testid="movie-release-date">Release date: {banner.release_date}</p>
        <p data-testid="movie-runtime">Runtime: {banner.runtime}</p>
        <p data-testid="movie-overview">Overview: {banner.overview}</p>
      </div>
      <Footer />
    </div>
  );
}
