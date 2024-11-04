import React, { useState, useEffect } from 'react';
import { getProjects } from '../services/api';
import { SwipeCarousel } from './SwipeCarousel'; // Importer le SwipeCarousel

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await getProjects();
                setProjects(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des projets:", error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="project-list">
            {/* Affichage du carrousel si des projets sont disponibles */}
            {projects.length > 0 ? (
                <SwipeCarousel projects={projects} />
            ) : (
                <p>Aucun projet disponible.</p>
            )}
        </div>
    );
};

export default ProjectList;
