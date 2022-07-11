import "../MoviePage/MoviePage.css"
import { useState } from "react"
import genres from '../../components/genres.js'
import FeaturedTVShows from "../../components/FeaturedShow/FeaturedShow"
import TVShowsCont from "../../components/TVShowsCont/TVShowsCont";
import TVShowsGenreRows from "../../components/TVShowsGenreRows/TVShowsGenreRows";

export default function TVShowPage({user}){
    const API_KEY = "d360e29d9c56bc4d6949ac6197400528";

    const [tvShows, SetTVShows] = useState([]);

    return(
      <div className="Index">
      <FeaturedTVShows API_KEY={API_KEY} />
      <TVShowsCont API_KEY={API_KEY} tvShows={tvShows} SetTVShows={SetTVShows} />
      <TVShowsGenreRows
        API_KEY={API_KEY}
        tvShows={tvShows}
        SetTVShows={SetTVShows}
        genreId={genres[2].id}
        genreName={genres[2].name}
      />
      <TVShowsGenreRows
        API_KEY={API_KEY}
        tvShows={tvShows}
        SetTVShows={SetTVShows}
        genreId={genres[3].id}
        genreName={genres[3].name}
      />
      <TVShowsGenreRows
        API_KEY={API_KEY}
        tvShows={tvShows}
        SetTVShows={SetTVShows}
        genreId={genres[4].id}
        genreName={genres[4].name}
      />
      <TVShowsGenreRows
        API_KEY={API_KEY}
        tvShows={tvShows}
        SetTVShows={SetTVShows}
        genreId={genres[5].id}
        genreName={genres[5].name}
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
        genreId={genres[7].id}
        genreName={genres[7].name}
      />
      <TVShowsGenreRows
        API_KEY={API_KEY}
        tvShows={tvShows}
        SetTVShows={SetTVShows}
        genreId={genres[8].id}
        genreName={genres[8].name}
      />
      <TVShowsGenreRows
        API_KEY={API_KEY}
        tvShows={tvShows}
        SetTVShows={SetTVShows}
        genreId={genres[9].id}
        genreName={genres[9].name}
      />
      <TVShowsGenreRows
        API_KEY={API_KEY}
        tvShows={tvShows}
        SetTVShows={SetTVShows}
        genreId={genres[10].id}
        genreName={genres[10].name}
      />
      <TVShowsGenreRows
        API_KEY={API_KEY}
        tvShows={tvShows}
        SetTVShows={SetTVShows}
        genreId={genres[11].id}
        genreName={genres[11].name}
      />
      <TVShowsGenreRows
        API_KEY={API_KEY}
        tvShows={tvShows}
        SetTVShows={SetTVShows}
        genreId={genres[12].id}
        genreName={genres[12].name}
      />
      {/* <TVShowsContainer getTVShows={getTVShows} API_KEY={API_KEY} /> */}
    </div>
    )
}