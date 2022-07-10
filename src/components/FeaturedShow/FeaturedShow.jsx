import "./FeaturedShow.css";
import {useEffect, useState} from "react"


export default function FeaturedTVShow({API_KEY}){

    const [featuredTVShow, setFeaturedTVShow] = useState([])
    const [featuredUrl, SetFeaturedUrl] = useState([])
  
    function getFeaturedFilm(url){
      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results[0])
        setFeaturedTVShow(data.results[0])
    })
  }
    const URL_Featured = `https://api.themoviedb.org/3/tv/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=stranger%20things&include_adult=false`
    const URL_Featured_Video = `https://api.themoviedb.org/3/tv/66732/videos?api_key=${API_KEY}&language=en-US`
  
    function getFeaturedTVShowVideo(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const videokey=data.results[4].key;
          SetFeaturedUrl(`https://www.youtube.com/embed/${videokey}?autoplay=1&loop=1&playlist=${videokey}&mute=1&rel=0`)
        });
      }
  
    useEffect(() => {
      getFeaturedTVShowVideo(URL_Featured_Video)
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
        <div className="featuredinfo">
            <h2>{featuredTVShow.title}</h2>
            <p>{featuredTVShow.overview}</p>
        </div>
        </div>
    )
}
