import './App.css';
import { useRef, useState } from 'react'
import AuthPage from '../AuthPage/AuthPage';
import MoviePage from '../MoviePage/MoviePage';
import { Routes, Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
import WatchList from '../WatchList/WatchList';
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
  const [profiles, setProfiles] = useState()
  console.log("app.js User:", user)
  const [clickedProfile, setClickedProfile] = useState("")
  const [listName, setListName] = useState("")
  const [profileList, setProfileList] = useState()

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
          <NavBar user={user} setUser={setUser} clickedProfile={clickedProfile} setClickedProfile={setClickedProfile} inputText={inputText} setInputText={setInputText} inputHandler={inputHandler}/>
          <Routes>
            {/* <Route path="/" element={<ProfilePage/>} /> */}
            <Route path="/profiles/:userid" element={<ProfilePage user={user} profiles={user.user.Profiles} setProfiles={setProfiles} profileList={profileList} setProfileList={setProfileList} clickedProfile={clickedProfile} setClickedProfile={setClickedProfile}/>}/>
            <Route path="/profiles/manage" element={<ManageProfile user={user} profiles={user.user.Profiles} setProfiles={setProfiles} profileList={profileList} setProfileList={setProfileList} clickedProfile={clickedProfile} setClickedProfile={setClickedProfile}/>}/>
            <Route path="/profiles/manage/:profileId" element={<EditProfile user={user} profiles={user.user.Profiles} setProfiles={setProfiles} profileList={profileList} setProfileList={setProfileList} clickedProfile={clickedProfile} setClickedProfile={setClickedProfile}/>}/>

            <Route path="/home" element={<HomePage currentText={inputHandler}/> } />
            <Route path="/movies" element={<MoviePage currentText={inputHandler}/>} />
            <Route path="/tvshows" element={<TVShowPage currentText={inputHandler} user={user}/>} />
            <Route path="/watchlist/:id" element={<WatchList currentText={inputHandler} user={user} />} />
          </Routes>
      </>
      :
      <AuthPage user={user} setUser={setUser} />}
    </main>
  );
}
