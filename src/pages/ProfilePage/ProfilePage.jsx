import React, { useState } from "react"
import "./ProfilePage.css"
import * as ProfileAPI from "../../utilities/profiles-api";

export default function ProfilePage() {

    const [visible, setVisible] = useState(false)
    return(

    
        <div>
            <h1>Who's Watching?</h1>

            <a className="text-standards hover" onClick={() => setVisible(!visible)}>{visible ? '-' : '+'}</a>
                {visible && 
                    <div>
                        <form className="form" onSubmit={ProfileAPI.createProfile}>
                            <input type="text"
                            placeholder="Create Profile"value ="ProfileName"></input>
                            {/* <input type="checkbox" value="autoPlay"></input> */}
                            <input type="submit" className="hover"></input>
                        </form>
                    </div> }


            <button>Manage Profiles</button>
            
        </div>
        
    );
  }
  