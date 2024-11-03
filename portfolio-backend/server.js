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

const corsOptions = {
    origin: 'https://mattidev.netlify.app', // Assurez-vous que cela correspond à votre URL de frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
};

app.use(cors(corsOptions)); // Cela doit être avant l'utilisation des routes


// Middleware pour traiter le JSON
app.use(express.json());

// Connexion à la base de données
db();

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/auth', authRoutes);

// Lancement du serveur
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});
