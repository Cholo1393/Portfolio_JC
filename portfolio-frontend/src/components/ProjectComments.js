// src/components/ProjectComments.js
import React, { useState, useEffect } from 'react';
import { getCommentsByProjectId } from '../services/api'; // Corriger l'importation

const ProjectComments = ({ projectId }) => {
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await getCommentsByProjectId(projectId); // Appel de la bonne fonction
                setComments(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des commentaires:", error);
                setError("Erreur lors de la récupération des commentaires."); // Afficher un message d'erreur
            }
        };

        fetchComments();
    }, [projectId]);

    if (error) return <div>{error}</div>; // Afficher un message d'erreur

    return (
        <div>
            {comments.map(comment => (
                <div key={comment._id}>
                    <p>{comment.text}</p>
                </div>
            ))}
        </div>
    );
};

export default ProjectComments;
