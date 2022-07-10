// LoginForm.jsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser, user}) {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  let navigate = useNavigate();

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }
  

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
      console.log(user)
      navigate(`/profiles/${user.user._id}`, { replace: true });
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div className='highest-cont'>
      <div className="form-container" onSubmit={handleSubmit}>
        <form className="form login-form" autoComplete="off" >
          <input type="text" name="username" placeholder='Username' value={credentials.username} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={credentials.password} onChange={handleChange} required />
          <button class="submit" type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}