import React from 'react';
import Signin from '../components/login/signin';
import Signup from '../components/login/signup';
import Toggle from '../components/login/toggle';
import '../assets/css/login.css';

function LoginPage() {
    return (
        <div className="custom-container">
            <Signin />
            <Signup />
            <Toggle />
        </div>
    );
}

export default LoginPage;
