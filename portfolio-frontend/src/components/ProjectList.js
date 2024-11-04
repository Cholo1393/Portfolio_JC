import React, { useState, useEffect } from 'react';
import { getProjects } from '../services/api';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await getProjects();
                setProjects(response.data);
                setError(null);
            } catch (error) {
                setError("Erreur lors de la récupération des projets");
                console.error("Erreur lors de la récupération des projets:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) return <p>Chargement des projets...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="project-list">
            {projects.map(project => (
                <div key={project._id} className="project">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <div className="project-images">
                        {project.imageUrls.map((url, index) => (
                            <img key={index} src={url} alt={`${project.title} image ${index + 1}`} className="project-image" />
                        ))}
                    </div>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">Voir sur GitHub</a>
                </div>
            ))}
        </div>
    );
};

export default ProjectList;
