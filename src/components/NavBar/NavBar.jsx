import './NavBar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import * as userService from '../../utilities/users-service'
const propic1 = require("../../images/profile-icon1.png")
const propic2 = require("../../images/profile-icon2.png")
const propic3 = require("../../images/profile-icon3.png")
const propic4 = require("../../images/profile-icon4.png")
const propic5 = require("../../images/profile-icon5.png")
const propic6 = require("../../images/profile-icon6.png")

const images = [propic1,propic2,propic3,propic4,propic5,propic6]

export default function NavBar({ user, setUser, clickedProfile, setClickedProfile, inputHandler}) {
    // Add the following function
    function handleLogOut() {
        // Delegate to the users-service
        setClickedProfile("")
        userService.logOut()
        // Update state will also cause a re-render
        setUser(null)
    }

    return(
        <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand">MERNFLEX</a>
            <button class="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span 
                class="navbar-toggler-icon">
                </span>
            </button>
            <div 
                class="collapse navbar-collapse" 
                id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li 
                            class="nav-item active">
                            <Link 
                            className="nav-link" 
                            to="/home">
                            Home
                            </Link>
                        </li>
                        <li 
                            class="nav-item">
                            <Link 
                            className="nav-link" 
                            to="/tvshows">
                                TV Shows
                            </Link>
                        </li>
                        <li 
                            class="nav-item">
                            <Link 
                            className="nav-link" 
                            to="/movies">Movies</Link>
                        </li>
                        <li 
                            class="nav-item">
                            <Link className="nav-link" 
                            to={`/watchlist/${clickedProfile._id}`}>My Watchlist</Link>
                        </li>
                    </ul>
                    <form 
                        class="form-inline nav-form my-2 my-lg-0 mr-auto">
                        <input 
                            class="form-control mr-sm-2" 
                            type="search" 
                            placeholder="Search" aria-label="Search" 
                            label="Search"
                            onInput={inputHandler}>
                        </input>
                    </form>
                    <ul class="navbar-nav mr-auto ">
                    <li 
                        class="nav-item"> 
                        <Link 
                            className="nav-link" 
                            to="" 
                            onClick={handleLogOut}>Log Out</Link></li>
                    <li class="nav-item">
                        <Link 
                            className="nav-link" 
                            to={`/profiles/${user.user._id}`}>
                        <div>
                        <img 
                            className = "nav-profile-icon" 
                            src={images[clickedProfile.ProfileImg]} 
                            alt="" ></img>
                            {clickedProfile.ProfileName}
                        </div></Link>
                    </li>
                    </ul>
            </div>
        </nav>
)
    }