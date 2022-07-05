import React, { useState } from "react"
import "./ProfilePage.css"

export default function ProfilePage() {

    const [visible, setVisible] = useState(false)
    return(

    
        <div>
            <h1>Who's Watching?</h1>

            <a className="text-standards hover" onClick={() => setVisible(!visible)}>{visible ? '-' : '+'}</a>
                {visible && 
                    <div>
                        <form className="form">
                            <input type="text"
                            placeholder="Create Profile"></input>
                            <input type="submit" className="hover"></input>
                        </form>
                    </div> }


            <button>Manage Profiles</button>
            
        </div>
        
    );
  }
  