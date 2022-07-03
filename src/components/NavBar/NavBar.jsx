import './NavBar.css'
import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {
    
    // Add the following function
    function handleLogOut() {
        // Delegate to the users-service
        userService.logOut()
        // Update state will also cause a re-render
        setUser(null)
    }

    return(
        <nav>
            <Link to="/">Home</Link>
            &nbsp; | &nbsp;
            <Link to="/TvShows">Tv Shows</Link>
            &nbsp; | &nbsp;
            <Link to="/Movies">Movies</Link>
            &nbsp; | &nbsp;
            <Link to="/WatchList">WatchList</Link>
            &nbsp; | &nbsp;
            Welcome, { user.username }
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}