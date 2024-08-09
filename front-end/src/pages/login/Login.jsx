import React from 'react'
import "./Login.css"
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

export default function Login() {
  return (
    <div className="wrapper">
    <form action="">
    <h1>Sign In To Account</h1>
    <div className="input-box">
    <input type="text"  placeholder= 'Username' required/>
    <FaUser  className="icon"/>
    </div>
    <div className="input-box">
    <input type="text"  placeholder= 'Password' required/>
    <FaLock className="icon" />
    </div>
    <div className="remember-forgot">
<label><input type="checkbox" />Remember Me</label>   
<a href="#">Forgot Password?</a>
</div>

<button type="submit">Login</button> 

<div className="register-link">    
<p>Don't Have An Account?<a href="#">Register Here</a></p>
</div>
    </form>
    </div>

  )
}
