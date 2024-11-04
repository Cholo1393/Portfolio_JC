import React, { useState, useEffect } from 'react';
import { getProjects, postComment, getCommentsByProjectId } from '../services/api';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    const [comments, setComments] = useState({});
    const [commentText, setCommentText] = useState({});
    const [username, setUsername] = useState('');

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await getProjects();
                setProjects(response.data);

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
            setCommentText(prev => ({ ...prev, [projectId]: '' }));
        } catch (error) {
            console.error("Erreur lors de l'ajout du commentaire:", error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="project-list grid gap-6 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {projects.map(project => (
                <div key={project._id} className="project border border-gray-200 p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition duration-300">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h2>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 font-medium mb-4 inline-block"
                    >
                        Voir sur GitHub
                    </a>

                    <div className="mt-4">
                        <input
                            type="text"
                            placeholder="Votre nom"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="border p-2 rounded w-full mb-2 text-gray-900"
                        />
                        <input
                            type="text"
                            placeholder="Laissez un commentaire"
                            value={commentText[project._id] || ''}
                            onChange={(e) => setCommentText(prev => ({ ...prev, [project._id]: e.target.value }))}
                            className="border p-2 rounded w-full mb-2 text-gray-900"
                        />
                        <button
                            onClick={() => handleCommentSubmit(project._id)}
                            className="w-full bg-blue-500 text-white rounded py-2 hover:bg-blue-600 transition duration-200"
                        >
                            Commenter
                        </button>
                    </div>

                    <div className="mt-4 space-y-2">
                        {comments[project._id] && comments[project._id].map(comment => (
                            <div key={comment._id} className="border-t border-gray-200 pt-2 text-gray-700">
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
