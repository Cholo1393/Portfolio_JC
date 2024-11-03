// src/components/Project.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getComments, getProject } from '../services/api'; // Mettez à jour votre API pour obtenir les détails du projet

const Project = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        const fetchProject = async () => {
            const response = await getProject(projectId);
            setProject(response.data);
        };

        const fetchComments = async () => {
            const response = await getComments(projectId);
            setComments(response.data);
        };

        fetchProject();
        fetchComments();
    }, [projectId]);

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        // Implémentez la logique pour soumettre un nouveau commentaire
    };

    if (!project) return <p>Chargement...</p>;

    return (
        <div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            {/* Afficher les commentaires ici, en utilisant le composant ProjectComments */}
            <ProjectComments projectId={projectId} />
        </div>
    );
};

export default Project;
