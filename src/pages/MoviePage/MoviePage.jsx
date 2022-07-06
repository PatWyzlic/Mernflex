import "./MoviePage.css"
import { useState } from "react"
import genres from '../../components/genres.js'
import FeaturedMovie from "../../components/FeaturedMovie/FeaturedMovie";
import MoviesCont from "../../components/MoviesCont/MoviesCont";
import MoviesGenreRows from "../../components/MoviesGenreRows/MoviesGenreRows";



export default function IndexPage(){

    const [movies, SetMovies] = useState([]);

    const API_KEY = "d360e29d9c56bc4d6949ac6197400528";


    return(
      <div className="Index">
      <FeaturedMovie API_KEY={API_KEY} />
      <MoviesCont API_KEY={API_KEY} movies={movies} SetMovies={SetMovies} />
      <MoviesGenreRows
        API_KEY={API_KEY}
        movies={movies}
        SetMovies={SetMovies}
        genreId={genres[2].id}
        genreName={genres[2].name}
      />
      <MoviesGenreRows
        API_KEY={API_KEY}
        movies={movies}
        SetMovies={SetMovies}
        genreId={genres[3].id}
        genreName={genres[3].name}
      />
      <MoviesGenreRows
        API_KEY={API_KEY}
        movies={movies}
        SetMovies={SetMovies}
        genreId={genres[4].id}
        genreName={genres[4].name}
      />
      <MoviesGenreRows
        API_KEY={API_KEY}
        movies={movies}
        SetMovies={SetMovies}
        genreId={genres[5].id}
        genreName={genres[5].name}
      />
      <MoviesGenreRows
        API_KEY={API_KEY}
        movies={movies}
        SetMovies={SetMovies}
        genreId={genres[6].id}
        genreName={genres[6].name}
      />
      <MoviesGenreRows
        API_KEY={API_KEY}
        movies={movies}
        SetMovies={SetMovies}
        genreId={genres[7].id}
        genreName={genres[7].name}
      />
      <MoviesGenreRows
        API_KEY={API_KEY}
        movies={movies}
        SetMovies={SetMovies}
        genreId={genres[8].id}
        genreName={genres[8].name}
      />
      <MoviesGenreRows
        API_KEY={API_KEY}
        movies={movies}
        SetMovies={SetMovies}
        genreId={genres[9].id}
        genreName={genres[9].name}
      />
      <MoviesGenreRows
        API_KEY={API_KEY}
        movies={movies}
        SetMovies={SetMovies}
        genreId={genres[10].id}
        genreName={genres[10].name}
      />
      <MoviesGenreRows
        API_KEY={API_KEY}
        movies={movies}
        SetMovies={SetMovies}
        genreId={genres[11].id}
        genreName={genres[11].name}
      />
      <MoviesGenreRows
        API_KEY={API_KEY}
        movies={movies}
        SetMovies={SetMovies}
        genreId={genres[12].id}
        genreName={genres[12].name}
      />
      {/* <MoviesContainer getMovies={getMovies} API_KEY={API_KEY} /> */}
    </div>
    )
}