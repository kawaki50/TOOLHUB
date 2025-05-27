import React from 'react';
import '../assets/css/style.css';
const Nav = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <input type="checkbox" id="checkbox" />
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <ul className="menu-items">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#sellers">Shop</a></li>
                    <li><a href="#news">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
                <div className="logo">
                    <img src="../src/assets/img/LOGO.png" alt="Logo" style={{ width: '180px'}} />
                </div>
            </div>
        </nav>
    );
};

export default Nav;