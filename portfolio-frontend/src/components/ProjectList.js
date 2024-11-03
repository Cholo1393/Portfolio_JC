import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/projects'); // Assurez-vous que l'URL est correcte
                setProjects(response.data);
            } catch (err) {
                setError(err);
                console.error('Erreur de récupération des projets:', err);
            }
        };

        fetchProjects();
    }, []);

    if (error) {
        return <div>Erreur de récupération des projets: {error.message}</div>;
    }

    return (
        <div>
            <h2>Liste des Projets</h2>
            <ul>
                {projects.map(project => (
                    <li key={project._id}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">Voir le projet sur GitHub</a>
                        {project.image && <img src={project.image} alt={project.title} />}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectList;
