import React, { useState } from 'react';
import { registerUser, loginUser } from '../services/api';

const Auth = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true); // true for login, false for register

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isLogin) {
                const data = await loginUser(email, password);
                setToken(data.token);
            } else {
                await registerUser(username, email, password);
                // Optionally auto-login after registration
                const data = await loginUser(email, password);
                setToken(data.token);
            }
        } catch (error) {
            console.error("Erreur d'authentification:", error.response.data.message);
        }
    };

    return (
        <div>
            <h2>{isLogin ? 'Connexion' : 'Inscription'}</h2>
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
            </form>
            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Pas encore inscrit ? Créez un compte' : 'Déjà inscrit ? Connectez-vous'}
            </button>
        </div>
    );
};

export default Auth;
