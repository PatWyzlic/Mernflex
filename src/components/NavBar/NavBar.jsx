import './NavBar.css'
import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser, clickedProfile }) {
    
    // Add the following function
    function handleLogOut() {
        // Delegate to the users-service
        userService.logOut()
        // Update state will also cause a re-render
        setUser(null)
    }


    return(

        <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="#">Mernflex</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/tvshows">TV Shows</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/movies">Movies</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/watchlistpage">My Watchlist</a>
                    </li>
                </ul>
                    <form class="form-inline nav-form my-2 my-lg-0 mr-auto">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <ul class="navbar-nav mr-auto ">
                    <li class="nav-item"> <Link className="nav-link" to="" onClick={handleLogOut}>Log Out</Link></li>
                    </ul>
                    {clickedProfile.ProfileName}
            </div>
        </nav>
)
}




{/* 
        // <nav>
        //     <Link to="/">Home</Link>
        //     &nbsp; | &nbsp;
        //     <Link to="/TvShows">Tv Shows</Link>
        //     &nbsp; | &nbsp;
        //     <Link to="/Movies">Movies</Link>
        //     &nbsp; | &nbsp;
        //     <Link to="/WatchList">WatchList</Link>
        //     &nbsp; | &nbsp;
        //     Welcome, { user.username }
        //     &nbsp; | &nbsp;
        //     <Link to="" onClick={handleLogOut}>Log Out</Link>
        // </nav>
    ) */}