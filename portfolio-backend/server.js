// server.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const db = require('./config/db'); // Assurez-vous que votre fichier db.js contient la connexion MongoDB
const projectRoutes = require('./routes/projectRoutes');
const commentRoutes = require('./routes/commentRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Configuration des options CORS
const corsOptions = {
    origin: 'https://mattidev.netlify.app', // URL de votre frontend sur Netlify
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};

// Middleware pour activer CORS
app.use(cors(corsOptions));

// Middleware pour traiter le JSON
app.use(express.json());

// Connexion à la base de données
db();

// Route de test pour vérifier le serveur et CORS
app.get('/api/test', (req, res) => {
    res.json({ message: "CORS est configuré correctement" });
});

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/auth', authRoutes);

// Gestion des erreurs
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Erreur interne du serveur' });
});

// Lancement du serveur
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});
