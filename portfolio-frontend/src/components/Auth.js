import React, { useState } from 'react';
import { loginUser } from '../services/api';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      console.log('Utilisateur connecté :', response.data);
      // Stockez le token ou gérez la session ici
    } catch (err) {
      setError("Erreur d'authentification");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" />
      <button type="submit">Se connecter</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Auth;
