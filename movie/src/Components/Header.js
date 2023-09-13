import Navigation from "./Navigation";
import { useState, useEffect } from "react";
import imdb from "../assets/imdb.png";
import rot from "../assets/rot.png";
import { Link } from "react-router-dom";
import PlayCircleFilledWhiteRoundedIcon from "@mui/icons-material/PlayCircleFilledWhiteRounded";

const api_url =
  "https://api.themoviedb.org/3/movie/popular?api_key=98ae4acbc92a69d5c0c6d4d68f3992e5";
export default function Header() {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
        setBanner(data.results);
      });
  }, []);
  const randomBanner = banner[Math.floor(Math.random() * banner.length)];

  return (
    <div className="">
      {randomBanner && (
        <div
          className="banner-single pb-12 "
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(https://image.tmdb.org/t/p/w1280/${randomBanner.backdrop_path})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            backgroundColor: "#000",
          }}
          key={randomBanner.id}
        >
          <Navigation />
          <div className="banner-details ">
            <h2 className="banner-title">{randomBanner.title}</h2>
            <div className="banner-content">
              <div className="imdb">
                <span className="imbd-btn">
                  <img src={imdb} alt="rot" />
                  <p> {randomBanner.vote_average}</p>
                </span>
                <span className="imbd-btn-two">
                  <img src={rot} alt="imdb" />
                  <p> 97%</p>
                </span>
              </div>
              <p className="banner-overview">{randomBanner.overview}</p>
            </div>
            <div className="banner-btn-section" style={{ zIndex: 20 }}>
              <Link href="#" className="banner-btn">
                <PlayCircleFilledWhiteRoundedIcon className="icon" />
                Watch TRAILER
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
