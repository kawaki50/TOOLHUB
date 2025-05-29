import React from 'react';
import '../../assets/css/login.css';

function SignUp() {
    return (
        <div className="custom-sub-container">
    <div className="custom-img">
      <div className="custom-img__text custom-m--up">
        <h2>New here?</h2>
        <p>Sign up and discover great amount of new opportunities!</p>
      </div>
      <div className="custom-img__text custom-m--in">
        <h2>One of us?</h2>
        <p>If you already has an account, just sign in. We've missed you!</p>
      </div>
      <div className="custom-img__btn">
        <span className="custom-m--up">Sign Up</span>
        <span className="custom-m--in">Sign In</span>
      </div>
    </div>
    <div className="custom-form custom-sign-up">
      <h2>Time to feel like home,</h2>
      <label>
        <span>Name</span>
        <input type="text" />
      </label>
      <label>
        <span>Email</span>
        <input type="email" />
      </label>
      <label>
        <span>Password</span>
        <input type="password" />
      </label>
      <button type="button" className="custom-submit">Sign Up</button>

    </div>
  </div>
    )
}


export default SignUp;