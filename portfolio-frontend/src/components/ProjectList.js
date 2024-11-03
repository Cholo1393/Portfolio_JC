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
        <div className="carousel-container">
            <div className="carousel">
                {projects.map(project => (
                    <div key={project._id} className="project-card">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a href={project.githubLink} className="github-link">GitHub</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
