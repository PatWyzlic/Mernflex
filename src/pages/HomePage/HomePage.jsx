import "../HomePage/HomePage.css"
import FeaturedTVShows from "../../components/FeaturedShow/FeaturedShow";
import MoviesCont from "../../components/MoviesCont/MoviesCont";
import TVShowsCont from "../../components/TVShowsCont/TVShowsCont";
import MoviesGenreRows from "../../components/MoviesGenreRows/MoviesGenreRows";
import TVShowsGenreRows from "../../components/TVShowsGenreRows/TVShowsGenreRows"
import React, { useState } from "react"
import genres from '../../components/genres.js'

export default function HomePage({}) {

    const [movies, SetMovies] = useState([]);
    const [tvShows, SetTVShows] = useState([]);

    const API_KEY = "d360e29d9c56bc4d6949ac6197400528";


    return (
        <div className="Index">
        <FeaturedTVShows API_KEY={API_KEY} />
        <MoviesCont API_KEY={API_KEY} movies={movies} SetMovies={SetMovies} />
        <TVShowsCont API_KEY={API_KEY} tvShows={tvShows} SetTVShows={SetTVShows} />
        <MoviesGenreRows
        API_KEY={API_KEY}
        movies={movies}
        SetMovies={SetMovies}
        genreId={genres[3].id}
        genreName={genres[3].name}
        />
        <TVShowsGenreRows
        API_KEY={API_KEY}
        tvShows={tvShows}
        SetTVShows={SetTVShows}
        genreId={genres[6].id}
        genreName={genres[6].name}
      />
       <TVShowsGenreRows
        API_KEY={API_KEY}
        tvShows={tvShows}
        SetTVShows={SetTVShows}
        genreId={genres[10].id}
        genreName={genres[10].name}
      />
      <MoviesGenreRows
        API_KEY={API_KEY}
        movies={movies}
        SetMovies={SetMovies}
        genreId={genres[7].id}
        genreName={genres[7].name}
      />

        </div>
    );
}
