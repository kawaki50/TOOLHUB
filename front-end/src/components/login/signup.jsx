import React, { useState } from 'react';
import axios from 'axios';
import '../../assets/css/login.css';

function SignUp() {
    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        mot_de_passe: ''
    });

    const [errors, setErrors] = useState({});
    
    const validateForm = () => {
        let tempErrors = {};
        let isValid = true;

        // Validate name
        if (!formData.nom.trim()) {
            tempErrors.nom = "Le nom est requis";
            isValid = false;
        } else if (formData.nom.length < 2) {
            tempErrors.nom = "Le nom doit contenir au moins 2 caractères";
            isValid = false;
        }

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
        } else if (formData.mot_de_passe.length < 6) {
            tempErrors.mot_de_passe = "Le mot de passe doit contenir au moins 6 caractères";
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post('http://localhost/TOOLHUB/back-end/api/register.php', formData);
                if (response.data.success) {
                    alert('Inscription réussie !');
                    setFormData({ nom: '', email: '', mot_de_passe: '' });
                    setErrors({});
                } else {
                    alert(response.data.message || 'Une erreur est survenue');
                }
            } catch (error) {
                alert(error.response?.data?.message || 'Erreur lors de l\'inscription');
            }
        }
    };

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
      <form onSubmit={handleSubmit}>
      <label>
        <span>Nom</span>
        <input type="text"
                value={formData.nom}
                onChange={(e) => setFormData({...formData, nom: e.target.value})}
                required/>
        {errors.nom && <span className="error">{errors.nom}</span>}
      </label>
      <label>
        <span>Email</span>
        <input type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                 required/>
        {errors.email && <span className="error">{errors.email}</span>}
      </label>
      <label>
        <span>Password</span>
        <input type="password"
                value={formData.mot_de_passe}
                onChange={(e) => setFormData({...formData, mot_de_passe: e.target.value})}
                required/>
        {errors.mot_de_passe && <span className="error">{errors.mot_de_passe}</span>}
      </label>
      <button type="submit" className="custom-submit">Sign Up</button>
      </form>
    </div>
  </div>
    )
}

export default SignUp;