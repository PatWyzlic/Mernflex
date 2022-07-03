import { useState, useEffect } from "react"
import "./MoviesCont.css"



export default function MoviesCont({API_KEY, SetMovies, movies}){

  const mainUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=Action&with_watch_monetization_types=flatrate`;

  function getMovies(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        SetMovies(data.results);
        //console.log(data.results);
      });
    }

  useEffect(() => {
    getMovies(mainUrl)
  }, []);

    return(
        <>
        <h4 className="row-Title">Featured Films</h4>
        <div className="row">
          {movies.map((movie) => {
            return <div className="movie">
            <img
              className="movie"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
            />
          </div>
          })}
        </div>
      </>
    )
}
