import React from 'react'
import './Register.css'

export default function Register() {
  return (
    <div className="wrapper">
    <form action="">
    <h1>Create Account</h1>
    <div className="input-box">
    <input type="text"  placeholder= 'FullName' required/>
    </div>
    <div className="input-box">
    <input type="text"  placeholder= 'Email' required/>
    </div>
    <div className="input-box">
    <input type="text"  placeholder= 'Password' required/>
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
