// src/components/ProjectList.js
import React, { useState, useEffect } from 'react'; // Ajoutez cette ligne pour importer useState et useEffect
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
        <div>
            {projects.map(project => (
                <div key={project._id}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <a href={project.githubLink}>GitHub</a>
                </div>
            ))}
        </div>
    );
};

export default ProjectList;
