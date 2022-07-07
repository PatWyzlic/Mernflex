import './App.css';
import { useRef, useState } from 'react'
import AuthPage from '../AuthPage/AuthPage';
import MoviePage from '../MoviePage/MoviePage';
import { Routes, Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
import WatchListPage from '../WatchListPage/WatchListPage';
import ProfilePage from '../ProfilePage/ProfilePage'; 
import TVShowPage from '../TVShowPage/TVShowPage';
import HomePage from "../HomePage/HomePage"
import ManageProfile from "../ManageProfile/ManageProfile"
import EditProfile from '../EditProfile/EditProfile';

let newestInput = "";

export function newestInputFunction(){
  let theNewInput = newestInput
  return theNewInput
}

export default function App() {
  const [user, setUser] = useState(getUser())
  console.log("app.js User:", user)
  const [clickedProfile, setClickedProfile] = useState("")
  const [listName, setListName] = useState("")

  const [inputText, setInputText] = useState("");

    let inputHandler = (e) => {
        //convert input text to lower case
        let lowerCase = e.target.value.toLowerCase().split(' ').join('');
        console.log(lowerCase)
        newestInput = lowerCase
        setInputText(lowerCase);
    };

  return (
    <main className="App">
      {user ?
      <>
          <NavBar user={user} setUser={setUser} clickedProfile={clickedProfile} inputText={inputText} setInputText={setInputText} inputHandler={inputHandler} />
          <Routes>
            {/* <Route path="/" element={<ProfilePage/>} /> */}
            <Route path="/profiles" element={<ProfilePage profiles={user.Profiles} clickedProfile={clickedProfile} setClickedProfile={setClickedProfile}/>}/>
            <Route path="/profiles/manage" element={<ManageProfile profiles={user.Profiles} clickedProfile={clickedProfile} setClickedProfile={setClickedProfile}/>}/>
            <Route path="/profiles/manage/:profileId" element={<EditProfile profiles={user.Profiles} clickedProfile={clickedProfile} setClickedProfile={setClickedProfile}/>}/>
            
            <Route path="/home" element={<HomePage/>} />
            <Route path="/movies" element={<MoviePage/>} />
            <Route path="/tvshows" element={<TVShowPage currentText={inputHandler}/>} />
            {/* <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} /> */}
            <Route path="/watchlistpage" element={<WatchListPage listName={setListName}/>} />
          </Routes>
      </>
      :
      <AuthPage setUser={setUser} />}
    </main>
  );
}
