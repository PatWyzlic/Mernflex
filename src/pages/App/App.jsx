import './App.css';
import { useState } from 'react'
import AuthPage from '../AuthPage/AuthPage';
import IndexPage from '../IndexPage/IndexPage';
import { Routes, Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
import WatchListPage from '../WatchListPage/WatchListPage';
import ProfilePage from '../ProfilePage/ProfilePage'; 

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
            <Route path="/home" element={<IndexPage/>} />
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
