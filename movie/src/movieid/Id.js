import React, { useState, useEffect } from "react";
import Details from "../Pages/Details";


const api_url =
  "https://api.themoviedb.org/3/movie/${id}?api_key=98ae4acbc92a69d5c0c6d4d68f3992e5";
export default function Id() {
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
        <div></div>
    )
}