// src/components/Project.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getComments, getProject, postComment } from '../services/api'; // Ajoutez postComment si nécessaire
import ProjectComments from './ProjectComments'; // Assurez-vous que le chemin est correct

const Project = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    // Fonction pour récupérer le projet et les commentaires
    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await getProject(projectId);
                setProject(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération du projet:', error);
            }
        };

        const fetchComments = async () => {
            try {
                const response = await getComments(projectId);
                setComments(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des commentaires:', error);
            }
        };

        fetchProject();
        fetchComments();
    }, [projectId]);

    // Fonction pour soumettre un nouveau commentaire
    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await postComment(projectId, newComment); // Envoyez le nouveau commentaire à l'API
            setComments((prevComments) => [...prevComments, response.data]); // Ajoutez le nouveau commentaire à la liste
            setNewComment(''); // Réinitialisez le champ de saisie
        } catch (error) {
            console.error('Erreur lors de la soumission du commentaire:', error);
        }
    };

    if (!project) return <p>Chargement...</p>;

    return (
        <div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            {/* Afficher les commentaires ici, en utilisant le composant ProjectComments */}
            <ProjectComments comments={comments} />
            {/* Formulaire pour ajouter un nouveau commentaire */}
            <form onSubmit={handleCommentSubmit}>
                <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Ajouter un commentaire"
                />
                <button type="submit">Ajouter Commentaire</button>
            </form>
        </div>
    );
};

export default Project;
