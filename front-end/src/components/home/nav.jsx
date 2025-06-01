import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Vérifier si l'utilisateur est connecté au chargement du composant
        const user = localStorage.getItem('user');
        if (user) {
            const userData = JSON.parse(user);
            setIsLoggedIn(true);
            setUserName(userData.nom);
        }

        // Écouter l'événement de changement d'état de connexion
        const handleLoginStateChange = () => {
            const user = localStorage.getItem('user');
            if (user) {
                const userData = JSON.parse(user);
                setIsLoggedIn(true);
                setUserName(userData.nom);
            } else {
                setIsLoggedIn(false);
                setUserName('');
            }
        };

        window.addEventListener('userLoginStateChanged', handleLoginStateChange);

        // Nettoyer l'écouteur d'événement lors du démontage du composant
        return () => {
            window.removeEventListener('userLoginStateChanged', handleLoginStateChange);
        };
    }, []);

    const handleLogout = () => {
        // Supprimer les données de l'utilisateur du localStorage
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        setUserName('');
        // Rediriger vers la page d'accueil
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <input type="checkbox" id="checkbox" />
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <ul className="menu-items" style={{margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#sellers">Shop</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li style={{position:'absolute', right:'0px',marginRight: '2rem'}}>
                        {isLoggedIn ? (
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                <p style={{marginRight: '10px'}}>{userName}</p>
                                <button 
                                    onClick={handleLogout}
                                    style={{ 
                                        background: 'none', 
                                        border: 'none', 
                                        cursor: 'pointer',
                                        color: 'inherit',
                                        padding: '0',
                                        fontSize: 'inherit',
                                        width: '50px'
                                    }}
                                >
                                    <FontAwesomeIcon icon={faSignOutAlt} />
                                </button>
                            </div>
                        ) : (
                            <Link to="/login" style={{marginRight: '30px'}}>
                                <FontAwesomeIcon icon={faUser} />
                            </Link>
                        )}
                    </li>
                </ul>
                <div className="logo">
                    <Link to="/"><img src="/src/assets/img/LOGO.png" alt="Logo" style={{ width: '180px'}} /></Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;