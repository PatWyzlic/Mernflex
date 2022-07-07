import "./EditProfile.css"
import {useState} from "react"


export default function EditProfile(props){
    
    const [profileName, setProfileName] = useState("")

    function handleChange(evt) {
        setProfileName(evt.target.value);
      }

    
      async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
        evt.preventDefault();
        try {
            // const EditedProfile = await ProfileAPI.createProfile(profile); //unsure how to send the profile id here? OR don't fullu understand how this is going to edit the profile. 
            // setProfileName(EditedProfile);
        } catch(error) {
            console.log(error)
        }
      }

    return(
        <>
        <h1> Edit {props.clickedProfile.ProfileName}</h1>
        <div>
            <form action="">
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