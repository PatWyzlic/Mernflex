import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import "./Modal.css"
import genres from "../genres"

export default function MyVerticallyCenteredModal(props) {
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
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }