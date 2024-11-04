// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const db = require('./config/db');
const projectRoutes = require('./routes/projectRoutes');
const commentRoutes = require('./routes/commentRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Configuration des options CORS
const corsOptions = {
    origin: 'https://mattidev.netlify.app', // Changez ceci selon vos besoins
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
};

// Utilisation du middleware CORS
app.use(cors(corsOptions));

// Middleware pour traiter les requêtes JSON
app.use(express.json());

// Connexion à la base de données MongoDB
db().then(() => {
    console.log("Connexion à la base de données réussie");
}).catch(err => {
    console.error("Erreur de connexion à la base de données:", err);
});

// Routes API
app.use('/api/projects', projectRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/auth', authRoutes);

// Gestion des erreurs 404
app.use((req, res, next) => {
    res.status(404).json({ message: "Route non trouvée" });
});

// Gestion des erreurs générales
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Erreur interne du serveur" });
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});
