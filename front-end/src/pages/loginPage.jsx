import React from 'react';
import Signin from '../components/login/signin';
import Signup from '../components/login/signup';
import Toggle from '../components/login/toggle';
import Nav from '../components/home/nav';
import Footer from '../components/home/footer';
import '../assets/css/login.css';

function LoginPage() {
    return (
        <>
            <Nav />
            <div className="custom-container" style={{marginTop: '100px'}}>
                <Signin />
                <Signup />
                <Toggle />
            </div>
            <Footer />
        </>
    );
}

export default LoginPage;
