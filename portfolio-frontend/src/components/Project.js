// Project.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Project = ({ projectId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [project, setProject] = useState(null); // Pour stocker les détails du projet

    // Récupérer les détails du projet et les commentaires au chargement du composant
    useEffect(() => {
        const fetchProject = async () => {
            const response = await axios.get(`/api/projects/${projectId}`);
            setProject(response.data); // Assurez-vous que votre API renvoie les détails du projet
        };

        const fetchComments = async () => {
            const response = await axios.get(`/api/comments/${projectId}`);
            setComments(response.data);
        };

        fetchProject();
        fetchComments();
    }, [projectId]);

    // Soumettre un nouveau commentaire
    const handleCommentSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token'); // Récupère le token de l'utilisateur connecté
        if (!token) {
            alert('Veuillez vous connecter pour laisser un commentaire.');
            return;
        }

        try {
            await axios.post('/api/comments', { projectId, text: newComment }, {
                headers: { Authorization: `Bearer ${token}` }, // Envoie le token dans les en-têtes
            });
            setNewComment(''); // Réinitialise le champ de saisie

            // Recharger les commentaires après ajout
            const response = await axios.get(`/api/comments/${projectId}`);
            setComments(response.data);
        } catch (error) {
            console.error('Erreur lors de l\'envoi du commentaire', error);
        }
    };

    if (!project) return <p>Chargement...</p>; // Affiche un message pendant le chargement

    return (
        <div>
            <h2>{project.title}</h2> {/* Affiche le titre du projet */}
            <p>{project.description}</p> {/* Affiche la description du projet */}

            <h3>Commentaires</h3>
            <form onSubmit={handleCommentSubmit}>
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    required
                    placeholder="Ajoutez votre commentaire ici"
                />
                <button type="submit">Ajouter un commentaire</button>
            </form>
            <ul>
                {comments.map(comment => (
                    <li key={comment._id}>{comment.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default Project;
