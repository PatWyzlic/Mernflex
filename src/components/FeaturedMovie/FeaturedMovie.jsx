import "./FeaturedMovie.css";
import {useEffect, useState} from "react"




export default function FeaturedMovie({API_KEY}){

    const [featuredFilm, setFeaturedFilm] = useState([])
    const [featuredUrl, SetFeaturedUrl] = useState([])
  
    function getFeaturedFilm(url){
      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setFeaturedFilm(data.results[0])
    })
  }
    const URL_Featured = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=Interstellar`
    const URL_Featured_Video = `https://api.themoviedb.org/3/movie/157336/videos?api_key=${API_KEY}&language=en-US`
  
    function getFeaturedFilmVideo(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const videokey=data.results[6].key;
          SetFeaturedUrl(`https://www.youtube.com/embed/${videokey}?autoplay=1&loop=1&playlist=${videokey}&mute=1&rel=0`)
        });
      }
  
    useEffect(() => {
      getFeaturedFilmVideo(URL_Featured_Video)
      getFeaturedFilm(URL_Featured)
    }, []);
  

    return(
        <div className="featuredFilmCont">
            <iframe
                className="video"
                width="800"
                height="500"
                src={featuredUrl}
                allow="autoplay"
                title="YouTube video player"
                frameborder="0"
                allowFullScreen
                ></iframe>
        <div className="feraturedinfo">
            <h2>{featuredFilm.title}</h2>
            <p>{featuredFilm.overview}</p>
        </div>
        </div>
    )
}