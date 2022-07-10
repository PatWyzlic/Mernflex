import "./EditProfile.css"
import {useState} from "react"
import {editProfile,deleteProfile} from "../../utilities/profiles-api"
import {useParams} from "react-router-dom"
import axios from "axios"


export default function EditProfile(props){
    
    const [profileName, setProfileName] = useState({
        name: "",
    })
    //console.log(profileName)


    function handleChange(evt) {
        setProfileName({ ...profileName, [evt.target.name]: evt.target.value });
      }

    const id = props.clickedProfile._id

    function editProfileApi(data) {
        console.log(data)
        console.log(id)
        axios({
            url: `http://localhost:3000/profiles/manage/${id}`,
            method: "PUT",
            data: data
        })
          .then((response) => console.log(response))
        }
    

    async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
        evt.preventDefault();
        try {
            // const EditedProfile = await ProfileAPI.createProfile(profile); //unsure how to send the profile id here? OR don't fullu understand how this is going to edit the profile. 
            // setProfileName(EditedProfile);
            editProfileApi(profileName)
        console.log(profileName.name, props.clickedProfile._id)
        // editProfile(profileName.name,props.clickedProfile._id)

        } catch(error) {
            console.log(error)
        }
    }

    function deleteProfileApi() {
        axios({
            url: `http://localhost:3000/profiles/manage/${id}`,
            method: "DELETE",
        })
          .then((response) => console.log(response))
        }
    
    return(
        <>
        <h1> Edit {props.clickedProfile.ProfileName}</h1>
        <div>
        <form onSubmit={handleSubmit}>
                <input type="text" placeholder={props.clickedProfile.ProfileName} value={profileName.name} onChange={handleChange}
                name="name"/>
                <input type="hidden" placeholder={props.clickedProfile._id} value={props.clickedProfile._id}
                name="id"/>
                <input type="submit" />
            </form>
        </div>


        <div>Delete
            <form onSubmit={deleteProfileApi}>
                <input type="submit" />
            </form>
        </div>
        </>
    )
}