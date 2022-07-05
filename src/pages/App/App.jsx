import './App.css';
import { useState } from 'react'
import AuthPage from '../AuthPage/AuthPage';
import IndexPage from '../IndexPage/IndexPage';
import { Routes, Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
import WatchListPage from '../WatchListPage/WatchListPage';
import ProfilePage from '../ProfilePage/ProfilePage'; 
import TVShowPage from '../TVShowPage/TVShowPage';
import HomePage from "../HomePage/HomePage"

export default function App() {
  const [user, setUser] = useState(getUser())
  const [listName, setListName] = useState("")

  return (
    <main className="App">
      {user ?
      <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<ProfilePage/>} />
            <Route path="/home" element={<HomePage/>} />
            <Route path="/movies" element={<IndexPage/>} />
            <Route path="/tvshows" element={<TVShowPage/>} />
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
