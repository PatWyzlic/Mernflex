import React, { useEffect, useState } from "react"
import "./ProfilePage.css"
import * as ProfileAPI from "../../utilities/profiles-api";

export default function ProfilePage({profiles}) {
    const [visible, setVisible] = useState(false)
    const [profile, setProfile] = useState({
        ProfileName: ''
      });
      const [error, setError] = useState('');
    
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
        } catch {
          setError('Profile creation failed');
        }
      }

      console.log(profiles)
    
    return(
        <div>
            <h1>Who's Watching?</h1>

            <a className="text-standards hover" onClick={() => setVisible(!visible)}>{visible ? '-' : '+'}</a>
                {visible && 
                    <div>
                        <form className="form" onSubmit={handleSubmit}>
                            <input type="text"
                            placeholder="Create Profile" 
                            name="ProfileName" 
                            value={profile.ProfileName}
                            onChange={handleChange}>
                            </input>
                            {/* <input type="checkbox" value="autoPlay"></input> */}
                            <input type="submit" className="hover"></input>
                        </form>
                    </div> }

            <button>Manage Profiles</button>
            
        </div>
        
    );
  }
  