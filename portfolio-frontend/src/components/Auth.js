import React, { useState } from 'react';
import { loginUser } from '../services/api';
import { useNavigate } from 'react-router-dom'; // Utilisé pour la redirection

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook pour la navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      const token = response.data.token;

      // Stocker le token dans le localStorage
      localStorage.setItem('token', token);
      
      console.log('Utilisateur connecté :', response.data);

      // Redirection vers la page d'accueil (ou une autre page)
      navigate('/'); // Redirigez l'utilisateur après la connexion
    } catch (err) {
      setError("Erreur d'authentification");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Mot de passe"
        required
      />
      <button type="submit">Se connecter</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Auth;
