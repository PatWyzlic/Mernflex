import { useState, useEffect } from "react";
import * as App from "../../pages/App/App"
import MyVerticallyCenteredModal from "../Modal/Modaltv";
import "../TVShowsCont/TVShowsCont.css"


export default function TVShowsGenreRows({ API_KEY, genreId, genreName}){

  const [tvShows, setTVShows] = useState([]);

  const mainUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}&with_watch_monetization_types=flatrate`;
  const [modalShow, setModalShow] = useState(false);
  const [clickedMovie, setClickedMovie] = useState("")

  function clickedMovies(evt){
    setModalShow(true)
    setClickedMovie(evt)
    console.log("clicked Movie:", clickedMovie)
  }

  function getTVShows(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTVShows(data.results);
        //console.log(data.results);
      });
  }

  useEffect(() => {
    getTVShows(mainUrl);
  }, []);

  if(App.newestInputFunction() === ""){
    return(
    <>
      <h4 className="row-Title">{genreName}</h4>
      <div className="movie-row">
        {tvShows.map((tvShow) => {
          return (
            <div className="tv-show">
              <img
                className="tv-show"
                src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
                alt=""
                onClick={() => clickedMovies(tvShow)}
              />
              <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            clickedmovie={clickedMovie}
            API_KEY={API_KEY}
          />
            </div>
          );
        })}
      </div>
    </>
    )}else{
        return(
        <>
            {tvShows.map((tvShow) => {
                const theShow = tvShow.name.toLowerCase().split(' ').join('')
                if(theShow.includes(App.newestInputFunction())){
              return (
                  <>
                  <img
                    className="tv-show"
                    src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
                    alt=""
                    onClick={() => clickedMovies(tvShow)}
                  />
                  <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  clickedmovie={clickedMovie}
                  API_KEY={API_KEY}/>
                </>
              );
            }
            })}
        </>
        )
    }
}
