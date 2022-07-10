import React, { useEffect, useState } from "react"
import "./ProfilePage.css"
import * as ProfileAPI from "../../utilities/profiles-api";
import { Link } from 'react-router-dom'
import axios from "axios"
import { getToken } from '../../utilities/users-service'

const propic1 = require("../../images/profile-icon1.png")
const propic2 = require("../../images/profile-icon2.png")
const propic3 = require("../../images/profile-icon3.png")
const propic4 = require("../../images/profile-icon4.png")
const propic5 = require("../../images/profile-icon5.png")
const propic6 = require("../../images/profile-icon6.png")

export default function ProfilePage({user,appProfiles, profiles, setProfiles, profileList, setProfileList, clickedProfile, setClickedProfile}) {
    const [visible, setVisible] = useState(false)
    const [loggedinUser,setLoggedInUser] = useState("")
    const [profilesTry, setProfilesTry] = useState([])
    console.log("profiles:",profiles)
    // const [profileList, setProfileList] = useState(profiles)
    const [profile, setProfile] = useState({
        ProfileName: ''
      });
      const [error, setError] = useState('');

      const images = [propic1,propic2,propic3,propic4,propic5,propic6]
      
      console.log('profilePage User:', user.user)

    function getUser() {
      axios({
          headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json',
          },
          url: `/profiles/${user.user._id}`,
          method: "GET",
      })
        .then((response) => {
            const data = response.data
            console.log(response.data)
            setLoggedInUser(data)
            console.log(loggedinUser) 
        })
      }

      function handleChange(evt) {

        setProfile({ ...profile, [evt.target.name]: evt.target.value });
        setError('');
      }
    
      async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
        evt.preventDefault();
        try {
            const newProfile = await ProfileAPI.createProfile(profile);
            setProfile(newProfile);
            setProfiles(newProfile)
            setProfileList([...profileList, profile])
            setProfile({
              ProfileName : "",
              ProfileImg : ""
            })
            setVisible(false)
        } catch {
          setError('Profile creation failed');
        }
      }

      async function handleClick(evt){
        await setClickedProfile(evt)
        console.log("clicked Profile:", clickedProfile)
      }

      useEffect(() => {
        setProfileList(profiles)
        getUser()
      },[]);
    
    return(
      <>
      {profileList ? 
        <div class="profile-page">
            <h1>{`Hello ${loggedinUser.username}`}</h1>
            <h1>Who is Watching?</h1>
            <div className="profiles">
              {profileList.map((profile) => {
            return <div className="profile-cont">
                      {/* <div class="profile-icon"></div> */}
                      <Link to={`/home`}><img className = "profile-icon" src={images[profile.ProfileImg]} alt="" onClick={() => handleClick(profile)}/></Link>
                      <h4>{profile.ProfileName}</h4>
                  </div>
          })}
          <div className="profile-cont">
            <a className="profile-icon create-profile text-standards hover" onClick={() => setVisible(!visible)}>{visible ? '-' : '+'}</a>
                {visible && 
                    <div>
                        <form className="form" onSubmit={handleSubmit}>
                            <input type="text"
                            placeholder="Create Profile" 
                            name="ProfileName" 
                            value={profile.ProfileName}
                            onChange={handleChange} required>
                            </input>
                            <label>Profile Pic</label>
                            <select name="ProfileImg" size="3" onChange={handleChange} required>
                              <option value="0">Blue</option>
                              <option value="1">Yellow</option>
                              <option value="2">Red</option>
                              <option value="3">Dark Blue</option>
                              <option value="4">Purple</option>
                              <option value="5">Green</option>
                            </select>
                            {/* <input type="checkbox" value="autoPlay"></input> */}
                            <input type="submit" className="hover"></input>
                        </form>
                    </div> }
            <h4>Create Profile</h4>
          </div>
        </div>
            <Link className="manage-btn" to="/profiles/manage" profiles={profiles}><button>Manage Profiles</button></Link>
        </div>
        :
        <h1>Loading</h1>
                }
      </>
    );
  }