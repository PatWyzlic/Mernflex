import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import "./Modal.css"
import genres from "../genres"

export default function MyVerticallyCenteredModal(props) {
  const arr = props.clickedmovie.genre_ids
    let genreNames = []


    async function getgenres(){
        for (let i =0; i < arr.length; i++){
            console.log(arr[i])
            for (let j = 0; j < genres.length; j++){
                if(genres[j].id === arr[i]){
                    genreNames.push(genres[j].name)
                }
            }
        }
    }
    
    getgenres()
    console.log(genreNames)
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
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }