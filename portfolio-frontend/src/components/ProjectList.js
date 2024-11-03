// src/components/ProjectList.js
import React, { useState, useEffect } from 'react';
import { getProjects } from '../services/api';
import { Link } from 'react-router-dom'; // Ajoutez cette ligne pour utiliser le Link

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
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold text-center mb-6">Mes Projets</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map(project => (
                    <Link key={project._id} to={`/projects/${project._id}`} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
                        <p className="text-gray-700">{project.description}</p>
                        <a href={project.githubLink} className="text-blue-500 hover:underline">GitHub</a>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
