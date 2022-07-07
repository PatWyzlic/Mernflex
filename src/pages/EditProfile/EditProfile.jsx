import "./EditProfile.css"
import {useState} from "react"
import * as ProfileAPI from "../../utilities/profiles-api"
import { useParams } from "react-router-dom"

export default function EditProfile(props){
    
    const [profileName, setProfileName] = useState("")
console.log(props.clickedProfile._id)
    function handleChange(evt) {
        setProfileName(evt.target.value);
      }

    let {profileId} = useParams()
      async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
        evt.preventDefault();
        try {
        const EditedProfile = await ProfileAPI.editProfile(profileName, props.clickedProfile._id);
        setProfileName(EditedProfile);

        } catch(error) {
            console.log(error)
        }
      }

    return(
        <>
        <h1> Edit {props.clickedProfile.ProfileName}</h1>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder={props.clickedProfile.ProfileName} value={profileName} onChange={handleChange}/>
                <input type="submit" />
            </form>
        </div>
        <div>Delete
            <form>
                <input type="submit" />
            </form>
        </div>
        </>
    )
}