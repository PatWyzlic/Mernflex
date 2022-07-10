import { Component } from 'react'
import { useState } from 'react';
import { signUp } from '../../utilities/users-service.js'

import { useNavigate } from 'react-router-dom';

export default function SignUp({setUser}) {
    const [formData, setFormData]= useState({
        username: '',
        password: '',
        confirm: '',
        error: ''
    })

    let navigate = useNavigate();
    // The object passed to setState is merged with the current state object
   async function handleChange(evt){
        await setFormData({
            ... formData,[evt.target.name]: evt.target.value,
            error: ''
        });
    };
    async function handleSubmit(evt){
        evt.preventDefault()
        try {
            // We don't want to send the 'error' or 'confirm' property,
            //  so let's make a copy of the state object, then delete them
            console.log("formData:", formData)
            const formDataCopy = {...formData}
            console.log(formDataCopy)
            delete formDataCopy.error
            delete formDataCopy.confirm
            // The promise returned by the signUp service method 
            // will resolve to the user object included in the
            // payload of the JSON Web Token (JWT)
            const user = await signUp(formDataCopy)
            console.log("singupform user:", user)
            setUser(user)
            // navigate("/profiles", { replace: true });
        } catch {
            // If an error occurred
            setFormData({ error: 'Sign Up Failed - Try again'})
        }
    }
        const disable = formData.password !== formData.confirm;
        return (
            <div className='highest-cont'>
                <div className="form-container">
                    <h2>Unlimited Movies, Tv Shows and More</h2>
                    <h4>Watch Anywhere, Cancel Anytime</h4>
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <input type="text" name="username" placeholder='Username' value={formData.user} onChange={handleChange} required />
                        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                        <input type="password" name="confirm" placeholder="Confirm" value={formData.confirm} onChange={handleChange} required />
                        <button type="submit" disabled={disable}>SIGN UP</button>
                    </form>
                </div>
                <p className="error-message">&nbsp;{formData.error}</p>
            </div>
        );
}