import "./WatchList.css"
import React, { useState } from "react"

export default function WatchList({user, appProfiles, profiles, setProfiles, profileList, setProfileList, clickedProfile, setClickedProfile}) {
    const [visible, setVisible] = useState(false)

    return (
        <div>
            <div className="text-standards">
                <h1>Watch List <a className="text-standards hover" onClick={() => setVisible(!visible)}>{visible ? '-' : '+'}</a></h1>
                {visible && 
                    <div>
                        <form className="form">
                            <input type="text"
                            placeholder="New Watch List Name"></input>
                            <input type="submit" className="hover"></input>
                        </form>
                    </div>}
            </div>
        </div>
    );
}
