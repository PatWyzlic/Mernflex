import "./FeaturedShow.css";
import {useEffect, useState} from "react"


export default function FeaturedTVShow({API_KEY}){

    const [featuredFilm, setFeaturedTVShow] = useState([])
    const [featuredUrl, SetFeaturedUrl] = useState([])
  
    function getFeaturedFilm(url){
      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results[0])
        setFeaturedFilm(data.results[0])
    })
  }
    const URL_Featured = `https://api.themoviedb.org/3/tv/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=stranger%20things&include_adult=false`
    const URL_Featured_Video = `https://api.themoviedb.org/3/movie/157336/videos?api_key=${API_KEY}&language=en-US`
  
    function getFeaturedTVShowVideo(url) {
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
                allowfullscreen
                ></iframe>
        <div className="feraturedinfo">
            <h2>{featuredFilm.title}</h2>
            <p>{featuredFilm.overview}</p>
        </div>
        </div>
    )
}
