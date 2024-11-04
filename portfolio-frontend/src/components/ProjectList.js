// src/components/ProjectList.js

import React, { useState, useEffect } from 'react';
import { getProjects } from '../services/api';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null); // État pour gérer les erreurs
    const [loading, setLoading] = useState(true); // État pour gérer le chargement

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await getProjects(); // Appel à la fonction pour récupérer les projets
                setProjects(response); // Met à jour l'état avec les projets récupérés
            } catch (error) {
                console.error("Erreur lors de la récupération des projets:", error);
                setError("Une erreur est survenue lors de la récupération des projets."); // Met à jour l'état d'erreur
            } finally {
                setLoading(false); // Fin de chargement
            }
        };

        fetchProjects();
    }, []);

    // Affiche un message de chargement ou une erreur si applicable
    if (loading) return <p>Chargement des projets...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="project-list">
            {projects.map(project => (
                <div key={project._id} className="project">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <div className="project-images">
                        {project.images.map((url, index) => (
                            <img 
                                key={index} 
                                src={url} 
                                alt={`${project.title} screenshot ${index + 1}`} 
                                className="project-image" 
                            />
                        ))}
                    </div>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        Voir sur GitHub
                    </a>
                </div>
            ))}
        </div>
    );
};

export default ProjectList;
