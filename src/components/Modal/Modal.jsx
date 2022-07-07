import {useState} from "react"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import "./Modal.css"
import genres from "../genres"

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
      Popularity: 0
    })


    async function getgenres(){
        for (let i =0; i < arr.length; i++){
            // console.log(arr[i])
            for (let j = 0; j < genres.length; j++){
                if(genres[j].id === arr[i]){
                    genreNames.push(genres[j].name)
                }
            }
        }
    }
    
    getgenres()
    const genreNamesList = genreNames.toString()

    async function handleSubmit(evt){
      evt.preventDefault()
      await setWatchListMovie(
        {Title: props.clickedmovie.title,
        Description: props.clickedmovie.overview, 
        MovieDbId: props.clickedmovie.id,
        PosterPath: props.clickedmovie.poster_path,
        Genres: genreNamesList ,
        ReleaseDate: props.clickedmovie.release_date,
        Popularity: props.clickedmovie.popularity}
      )
    }
    console.log(watchListMovie)
    
    // console.log(genreNames)
    return (

      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           <img className= "modal-img" src={`https://image.tmdb.org/t/p/w500${props.clickedmovie.poster_path}`} alt="" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{props.clickedmovie.title}</h4>
          <p>
            {props.clickedmovie.overview}
          </p>
          <ul>
            {genreNames.map((genre) => {
              return (
             <li>
              {genre}
             </li>
              )
            })}
          </ul>
          <p>
            releaseDate: {props.clickedmovie.release_date}
          </p>
        </Modal.Body>
        <Modal.Footer>
            <div className="modal-btns">
            <form onSubmit={handleSubmit}> 
                {/* <input type="hidden" placeholder='Title' value={props.clickedmovie.title} name="Title" />
                <input type="hidden" placeholder='Description' value={props.clickedmovie.overview} name="Description"/>
                <input type="hidden" placeholder='MovieId' value={props.clickedmovie.id} name="MovieDbId"/>
                <input type="hidden" placeholder='Posterpath' value={props.clickedmovie.poster_path} name="PosterPath"/>
                <input type="hidden" placeholder='Genres' value={genreNamesList} name="Genres"/>
                <input type="hidden" placeholder='ReleaseDate' value={props.clickedmovie.release_date} name="ReleaseDate"/>
                <input type="hidden" placeholder='Popularity' value={props.clickedmovie.popularity} name="Popularity"/> */}
                <button type="submit">Add to Watchlist</button>
            </form>
            <Button onClick={props.onHide}>Close</Button>
            </div>          
        </Modal.Footer>
      </Modal>
    );
  }