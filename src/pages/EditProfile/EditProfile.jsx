import "./EditProfile.css"
import {useState} from "react"
import * as ProfileAPI from "../../utilities/profiles-api"


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
            console.log("Edit profile in handleSubmit")
        console.log("Edit profile var = ", ProfileAPI.editProfile(profileName, props.clickedProfile._id))
        let EditedProfile = await ProfileAPI.editProfile(profileName, props.clickedProfile._id);
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
                <input type="text" placeholder={props.clickedProfile.ProfileName} value={profileName} onChange={handleChange}
                name="ProfileName"/>
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