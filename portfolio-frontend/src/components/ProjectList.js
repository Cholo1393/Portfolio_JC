// src/components/ProjectList.js
import React, { useState, useEffect } from 'react';
import { getProjects } from '../services/api';

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
        <section>
            <h2>Mes Projets</h2>
            <div className="project-list">
                {projects.map(project => (
                    <div className="project-card" key={project._id}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">Voir sur GitHub</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectList;
