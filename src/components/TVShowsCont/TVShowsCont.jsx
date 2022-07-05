import { useState, useEffect } from "react"
import "./TVShowsCont.css"



export default function MoviesCont({API_KEY, SetTVShows, tvShows}){

  const mainUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=Action&with_watch_monetization_types=flatrate`;

  function getTVShows(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        SetTVShows(data.results);
        console.log(data.results);
      });
    }

  useEffect(() => {
    getTVShows(mainUrl)
  }, []);

    return(
        <>
        <h4 className="row-Title">Featured Films</h4>
        <div className="tv-show-row">
          {tvShows.map((tvShow) => {
            return <div className="tv-show">
            <img
              className="tv-show"
              src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
              alt=""
            />
          </div>
          })}
        </div>
      </>
    )
}
