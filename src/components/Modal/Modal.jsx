import {useState, useEffect} from "react"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import "./Modal.css"
import genres from "../genres"
import * as WatchListAPI from "../../utilities/watchList-api"

export default function MyVerticallyCenteredModal(props) {
  const arr = props.clickedmovie.genre_ids
    let genreNames = []
    const [watchListMovie, setWatchListMovie]= useState({
      Title: "",
      Description: "", 
      MovieDbId: 0,
      PosterPath: "",
      Genres: "",
      ReleaseDate: "",
      Popularity: 0,
      Current_Profile: ""
    })
    const [error, setError] = useState('');
    const [modalVideoUrl, SetModalVideoUrl] = useState([])

    
    
    
    async function getgenres(){
      for (let i =0; i < arr.length; i++){
        for (let j = 0; j < genres.length; j++){
          if(genres[j].id === arr[i]){
            genreNames.push(genres[j].name)
          }
        }
      }
    }
    
    getgenres()
    const genreNamesList = genreNames.toString()
    
    useEffect(() => {
      setWatchListMovie(
        {Title: props.clickedmovie.title,
          Description: props.clickedmovie.overview, 
          MovieDbId: props.clickedmovie.id,
          PosterPath: props.clickedmovie.poster_path,
          Genres: genreNamesList ,
          ReleaseDate: props.clickedmovie.release_date,
          Popularity: props.clickedmovie.popularity}
          );
      getFeaturedFilmVideo(URL_Featured_Video)
        },[props.clickedmovie]);

        const URL_Featured_Video = `https://api.themoviedb.org/3/movie/${props.clickedmovie.id}/videos?api_key=${props.API_KEY}&language=en-US`
        
        function getFeaturedFilmVideo(url) {
          fetch(url)
            .then((response) => response.json())
            .then((data) => {
              const videokey=data.results[0].key
              SetModalVideoUrl(`https://www.youtube.com/embed/${videokey}?autoplay=1&loop=1&playlist=${videokey}&mute=1&rel=0`)
            });
          }
        



        async function handleSubmit(evt){
          evt.preventDefault()
          try{
            const newwatchlistitem = await WatchListAPI.createWatchListItem()
            setWatchListMovie(newwatchlistitem)
          } catch {
            setError("WATCHLIST ITEM CREATION FAILED")
          }
          
        }
        
        return (
          
          <Modal
          {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.clickedmovie.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="videoCont">
        <iframe
                className="modal-video"
                src={modalVideoUrl}
                allow="autoplay"
                title="YouTube video player"
                frameborder="0"
                allowFullScreen
                ></iframe>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="footer-info">
            <div className="overview">
              <p>{props.clickedmovie.overview}</p>
            </div>
            <div className="info">
              <div>{genreNamesList}</div>
              <div>Released: {props.clickedmovie.release_date}</div>
            </div>
          </div>
          
            <div className="modal-btns">
            <form onSubmit={handleSubmit}> 
                <input type="hidden" placeholder='Title' value={props.clickedmovie.title} name="Title" />
                <input type="hidden" placeholder='Description' value={props.clickedmovie.overview} name="Description"/>
                <input type="hidden" placeholder='MovieId' value={props.clickedmovie.id} name="MovieDbId"/>
                <input type="hidden" placeholder='Posterpath' value={props.clickedmovie.poster_path} name="PosterPath"/>
                <input type="hidden" placeholder='Genres' value={genreNamesList} name="Genres"/>
                <input type="hidden" placeholder='ReleaseDate' value={props.clickedmovie.release_date} name="ReleaseDate"/>
                <input type="hidden" placeholder='Popularity' value={props.clickedmovie.popularity} name="Popularity"/>
                <button type="submit">Add to Watchlist</button>
            </form>
            <Button onClick={props.onHide}>Close</Button>
            </div>          
        </Modal.Footer>
      </Modal>
    );
  }