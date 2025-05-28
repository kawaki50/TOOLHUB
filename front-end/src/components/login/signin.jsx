import React from 'react';

function Signin() {
    return (
        <div class="form sign-in">
    <h2>Welcome back,</h2>
    <label>
      <span>Email</span>
      <input type="email" />
    </label>
    <label>
      <span>Password</span>
      <input type="password" />
    </label>
    <p class="forgot-pass">Forgot password?</p>
    <button type="button" class="submit">Sign In</button>
  </div>
    );
}

export default Signin;
