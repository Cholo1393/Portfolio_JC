// seedProjects.js
const mongoose = require('mongoose');
const cloudinary = require('./config/cloudinaryConfig');
const Project = require('./models/projectModel'); // Assurez-vous que le chemin est correct
const db = require('./config/db'); // Assurez-vous que le chemin est correct

// Connection à la base de données
db(); // connecte à MongoDB

const projects = [
    {
        title: 'HTML5 Gaming',
        description: 'Un jeu HTML5 captivant.',
        githubLink: 'https://github.com/Cholo1393/HTML5Gaming',
        imagePath: 'images/HTML5Gaming.png', // chemin local vers l'image
    },
    {
        title: 'Morpion',
        description: 'Un jeu de morpion classique.',
        githubLink: 'https://github.com/Cholo1393/morpion',
        imagePath: 'images/Morpion.png',
    },
    {
        title: 'App Mobile',
        description: 'Une application mobile innovante.',
        githubLink: 'https://github.com/Cholo1393/AppMobile',
        imagePath: 'images/My_App.png',
    },
];

const uploadImage = async (imagePath) => {
    const result = await cloudinary.uploader.upload(imagePath);
    return result.secure_url; // Retourne l'URL de l'image
};

const seedProjects = async () => {
    try {
        for (const project of projects) {
            const imageUrl = await uploadImage(project.imagePath); // Upload l'image sur Cloudinary
            project.image = imageUrl; // Ajoute l'URL de l'image au projet
        }

        await Project.insertMany(projects); // Insère les projets dans la base de données
        console.log('Projets ajoutés avec succès!');
    } catch (error) {
        console.error('Erreur lors de l\'ajout des projets:', error);
    } finally {
        mongoose.connection.close(); // Ferme la connexion à la base de données
    }
};

seedProjects();
