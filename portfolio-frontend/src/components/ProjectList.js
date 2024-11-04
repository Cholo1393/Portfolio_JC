import React, { useState, useEffect } from 'react';
import { getProjects } from '../services/api';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    const [comments, setComments] = useState({}); // Pour stocker les commentaires par projet
    const [commentText, setCommentText] = useState({}); // Pour stocker le texte du commentaire par projet
    const [username, setUsername] = useState(''); // Pour stocker le nom d'utilisateur

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await getProjects();
                setProjects(response.data);
                // Initialiser les commentaires pour chaque projet
                const initialComments = {};
                response.data.forEach(project => {
                    initialComments[project._id] = [];
                });
                setComments(initialComments);
            } catch (error) {
                console.error("Erreur lors de la récupération des projets:", error);
            }
        };

        fetchProjects();
    }, []);

    const handleCommentSubmit = async (projectId) => {
        try {
            const response = await fetch('/api/comments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ projectId, username, text: commentText[projectId] }),
            });

            const newComment = await response.json();
            // Ajouter le nouveau commentaire à l'état
            setComments(prev => ({ ...prev, [projectId]: [...prev[projectId], newComment] }));
            setCommentText(prev => ({ ...prev, [projectId]: '' })); // Réinitialiser le champ de commentaire
        } catch (error) {
            console.error("Erreur lors de l'ajout du commentaire:", error);
        }
    };

    return (
        <div className="project-list">
            {projects.map(project => (
                <div key={project._id} className="project border p-4 mb-4 rounded shadow-md">
                    <h2 className="text-xl font-bold">{project.title}</h2>
                    <p className="text-gray-700">{project.description}</p>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">Voir sur GitHub</a>

                    {/* Formulaire de commentaire */}
                    <div className="mt-4">
                        <input
                            type="text"
                            placeholder="Votre nom"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="border p-2 rounded mr-2"
                        />
                        <input
                            type="text"
                            placeholder="Laissez un commentaire"
                            value={commentText[project._id] || ''}
                            onChange={(e) => setCommentText(prev => ({ ...prev, [project._id]: e.target.value }))}
                            className="border p-2 rounded mr-2"
                        />
                        <button
                            onClick={() => handleCommentSubmit(project._id)}
                            className="bg-blue-500 text-white rounded p-2"
                        >
                            Commenter
                        </button>
                    </div>

                    {/* Affichage des commentaires */}
                    <div className="mt-2">
                        {comments[project._id] && comments[project._id].map(comment => (
                            <div key={comment._id} className="border-t border-gray-300 mt-2 pt-2">
                                <strong>{comment.username}</strong>: {comment.text}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectList;
