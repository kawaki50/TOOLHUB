import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/login.css';

function Signin() {
    const [formData, setFormData] = useState({
        email: '',
        mot_de_passe: ''
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        let tempErrors = {};
        let isValid = true;

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            tempErrors.email = "L'email est requis";
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            tempErrors.email = "Format d'email invalide";
            isValid = false;
        }

        // Validate password
        if (!formData.mot_de_passe) {
            tempErrors.mot_de_passe = "Le mot de passe est requis";
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post('http://localhost/TOOLHUB/back-end/api/login.php', formData);
                if (response.data.success) {
                    // Stocker les informations de l'utilisateur dans le localStorage
                    localStorage.setItem('user', JSON.stringify(response.data.user));
                    
                    // Déclencher un événement personnalisé pour notifier la barre de navigation
                    window.dispatchEvent(new Event('userLoginStateChanged'));
                    
                    alert('Connexion réussie !');
                    navigate('/'); // Rediriger vers la page d'accueil
                } else {
                    alert(response.data.message || 'Une erreur est survenue');
                }
            } catch (error) {
                alert(error.response?.data?.message || 'Erreur lors de la connexion');
            }
        }
    };

    return (
        <div className="custom-form custom-sign-in">
            <h2>Welcome back,</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Email</span>
                    <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </label>
                <label>
                    <span>Password</span>
                    <input 
                        type="password" 
                        value={formData.mot_de_passe}
                        onChange={(e) => setFormData({...formData, mot_de_passe: e.target.value})}
                        required
                    />
                    {errors.mot_de_passe && <span className="error">{errors.mot_de_passe}</span>}
                </label>
                <p className="custom-forgot-pass">Forgot password?</p>
                <button type="submit" className="custom-submit" style={{marginTop: '55px'}}>Sign In</button>
            </form>
        </div>
    );
}

export default Signin;
