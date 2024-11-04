// seedProjects.js
const mongoose = require('mongoose');
const Project = require('./models/projectModel'); // Assurez-vous que le chemin est correct
const db = require('./config/db'); // Assurez-vous que le chemin est correct

// Connection à la base de données
db(); // connecte à MongoDB

const projects = [
    {
        title: 'HTML5 Gaming',
        description: 'Un jeu HTML5 captivant.',
        githubLink: 'https://github.com/Cholo1393/HTML5Gaming',
        images: ['https://res.cloudinary.com/dwdidilop/image/upload/v1730405056/kmer1ismpgpug3myfats.png'], // URL directe de l'image
    },
    {
        title: 'Morpion',
        description: 'Un jeu de morpion classique.',
        githubLink: 'https://github.com/Cholo1393/morpion',
        images: ['https://res.cloudinary.com/dwdidilop/image/upload/v1730405057/hyjzgekguh0mc57o0xfp.png'], // URL directe de l'image
    },
    {
        title: 'App Mobile',
        description: 'Une application mobile innovante.',
        githubLink: 'https://github.com/Cholo1393/AppMobile',
        images: ['https://res.cloudinary.com/dwdidilop/image/upload/v1730682888/ygtbu2pkatq7syxiqndh.jpg'], // URL directe de l'image
    },
];

const seedProjects = async () => {
    try {
        await Project.deleteMany({}); // Supprimez les projets existants si nécessaire
        await Project.insertMany(projects); // Insère les projets dans la base de données
        console.log('Projets ajoutés avec succès!');
    } catch (error) {
        console.error('Erreur lors de l\'ajout des projets:', error);
    } finally {
        mongoose.connection.close(); // Ferme la connexion à la base de données
    }
};

seedProjects();
