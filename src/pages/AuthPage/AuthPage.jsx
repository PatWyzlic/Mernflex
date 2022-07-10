import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./AuthPage.css"
import { useState } from "react";

export default function AuthPage({ setUser, user }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="AuthPage">
      {/* {showLogin ? <h1>LogIn</h1> : <h1>SignUp</h1>} */}
      <div className="flex">
      {showLogin ? <LoginForm setUser={setUser} user={user} /> : <SignUpForm setUser={setUser} user={user} />}
      </div>
      <button className="authButton" onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</button>
    </main> 
  );
}
