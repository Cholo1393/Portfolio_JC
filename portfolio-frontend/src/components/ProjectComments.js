// src/components/ProjectComments.js
import React, { useState, useEffect } from 'react';
import { getComments } from '../services/api';

const ProjectComments = ({ projectId }) => {
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await getComments(projectId);
                setComments(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des commentaires:", error);
                setError("Erreur lors de la récupération des commentaires."); // Affiche un message d'erreur
            }
        };

        fetchComments();
    }, [projectId]);

    if (error) return <div>{error}</div>; // Affiche un message d'erreur

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
