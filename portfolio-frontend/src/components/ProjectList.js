import React, { useState, useEffect } from 'react';
import { getProjects, postComment, getCommentsByProjectId } from '../services/api';

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
                await Promise.all(response.data.map(async (project) => {
                    const commentsResponse = await getCommentsByProjectId(project._id);
                    initialComments[project._id] = commentsResponse.data || [];
                }));

                setComments(initialComments);
            } catch (error) {
                console.error("Erreur lors de la récupération des projets:", error);
            }
        };

        fetchProjects();
    }, []);

    const handleCommentSubmit = async (projectId) => {
        try {
            const newCommentData = {
                username,
                text: commentText[projectId],
            };

            const newComment = await postComment(projectId, newCommentData);
            setComments(prev => ({
                ...prev,
                [projectId]: [...prev[projectId], newComment.data]
            }));
            setCommentText(prev => ({ ...prev, [projectId]: '' })); // Réinitialiser le champ de commentaire
        } catch (error) {
            console.error("Erreur lors de l'ajout du commentaire:", error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="project-list grid gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {projects.map(project => (
                <div key={project._id} className="project border p-4 rounded shadow-md bg-white max-w-full sm:max-w-md md:max-w-sm lg:max-w-md">
                    <h2 className="text-lg md:text-xl font-bold text-gray-800">{project.title}</h2>
                    <p className="text-sm md:text-base text-gray-700 mb-2">{project.description}</p>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        Voir sur GitHub
                    </a>

                    {/* Formulaire de commentaire */}
                    <div className="mt-4 flex flex-col sm:flex-row sm:items-center">
                        <input
                            type="text"
                            placeholder="Votre nom"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="border p-2 rounded mr-2 mb-2 sm:mb-0 flex-1 text-black"
                        />
                        <input
                            type="text"
                            placeholder="Laissez un commentaire"
                            value={commentText[project._id] || ''}
                            onChange={(e) => setCommentText(prev => ({ ...prev, [project._id]: e.target.value }))}
                            className="border p-2 rounded mr-2 mb-2 sm:mb-0 flex-1 text-black"
                        />
                        <button
                            onClick={() => handleCommentSubmit(project._id)}
                            className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
                        >
                            Commenter
                        </button>
                    </div>

                    {/* Affichage des commentaires */}
                    <div className="mt-4 space-y-2">
                        {comments[project._id] && comments[project._id].map(comment => (
                            <div key={comment._id} className="border-t border-gray-300 pt-2 text-black">
                                <strong>{comment.username}</strong>: <span>{comment.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectList;
