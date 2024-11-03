const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const db = require('./config/db'); // Assurez-vous que ce chemin est correct
const projectRoutes = require('./routes/projectRoutes');
const commentRoutes = require('./routes/commentRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware pour CORS
app.use(cors());

// Middleware pour traiter le JSON
app.use(express.json());

// Connexion à la base de données
db(); // Connexion à MongoDB

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/auth', authRoutes);

// Lancement du serveur
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});
