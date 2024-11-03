// frontend/src/components/Auth.js

import React, { useState } from 'react';
import { registerUser, loginUser } from '../services/api';

const Auth = ({ setIsAuthenticated }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isLogin) {
                await loginUser({ email, password });
                setIsAuthenticated(true);
                // Gérer la redirection ou l'état après la connexion
            } else {
                await registerUser({ username, email, password });
                setIsAuthenticated(true);
                // Gérer la redirection ou l'état après l'inscription
            }
        } catch (error) {
            console.error('Erreur lors de la connexion/inscription', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {!isLogin && (
                <input
                    type="text"
                    placeholder="Nom d'utilisateur"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            )}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">{isLogin ? 'Se connecter' : 'S\'inscrire'}</button>
            <button type="button" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Pas de compte ? S\'inscrire' : 'Déjà un compte ? Se connecter'}
            </button>
        </form>
    );
};

export default Auth;
