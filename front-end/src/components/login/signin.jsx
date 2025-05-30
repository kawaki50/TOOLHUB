import React from 'react';
import '../../assets/css/login.css';

function Signin() {
    return (
        <div className="custom-form custom-sign-in">
    <h2>Welcome back,</h2>
    <label>
      <span>Email</span>
      <input type="email" />
    </label>
    <label>
      <span>Password</span>
      <input type="password" />
    </label>
    <p className="custom-forgot-pass">Forgot password?</p>
    <button type="button" className="custom-submit" style={{marginTop: '55px'}}>Sign In</button>
  </div>
    )
}


export default Signin;
