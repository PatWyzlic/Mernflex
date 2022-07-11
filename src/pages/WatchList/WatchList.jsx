import "./WatchList.css"
import React, { useState } from "react"
import axios from "axios"

export default function WatchList({user, profile}) {
    const [visible, setVisible] = useState(false)
    const [loggedinUser,setLoggedInUser] = useState("")

    function addWatchListItem() {
        axios({
            headers:{
              'Accept':'application/json',
              'Content-Type': 'application/json',
            },
            url: `/watchlist/${user.user._id}`,
            method: "POST",
        })
          .then((response) => {
              const data = response.data
              console.log("Response.data", response.data)
              setLoggedInUser(data)
              console.log(loggedinUser) 
          })
        }


    return (
        <div>
            <div className="text-standards">
                <h1>Watch List <a className="text-standards hover" onClick={() => setVisible(!visible)}>{visible ? '-' : '+'}</a></h1>
                {visible && 
                    <div>
                        <form className="form" 
                            onSubmit={addWatchListItem}>
                            <input type="text"
                            placeholder="New Watch List Name"></input>
                            <input type="submit" className="hover"></input>
                        </form>
                    </div>}
            </div>
        </div>
    );
}
