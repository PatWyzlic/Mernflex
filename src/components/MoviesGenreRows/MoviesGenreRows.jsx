import { useState, useEffect } from "react";
import * as App from "../../pages/App/App"
import MyVerticallyCenteredModal from "../Modal/Modal";


export default function MoviesGenreRows({ API_KEY, genreId, genreName }){

  const [movies, setMovies] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [clickedMovie, setClickedMovie] = useState("")

  const mainUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}&with_watch_monetization_types=flatrate`;

  function getMovies(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        //console.log(data.results);
      });
  }

  useEffect(() => {
    getMovies(mainUrl);
  }, []);

  function clickedMovies(evt){
    setModalShow(true)
    setClickedMovie(evt)
    console.log(clickedMovie)
  }
    
  if(App.newestInputFunction() === ""){
    return(
        <>
      <h4 className="row-Title">{genreName}</h4>
      <div className="movie-row">
          {movies.map((movie) => {
            return <div className="movie">
            <img
              className="movie"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
              onClick={() => clickedMovies(movie)}
            /> 
            <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            clickedmovie={clickedMovie}
            API_KEY={API_KEY}
          />
          </div>
          })}
        </div>
    </>
    )
    }else{
    return(
      <>
        {movies.map((movie) => {
          const theMovie = movie.title.toLowerCase().split(' ').join('')
          if(theMovie.includes(App.newestInputFunction())){
          return (
              <img
                className="movie"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
              />
          );
          }
        })}
      </>
  )
  }
}
