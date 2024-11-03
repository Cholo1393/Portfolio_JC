// src/components/Project.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProject, getComments } from '../services/api'; // Assurez-vous que ces fonctions existent

const Project = () => {
  const { projectId } = useParams(); // Obtenez l'ID du projet à partir de l'URL
  const [project, setProject] = useState(null);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectData = await getProject(projectId); // Remplacez par votre fonction d'API
        setProject(projectData);
        
        const commentsData = await getComments(projectId); // Remplacez par votre fonction d'API
        setComments(commentsData);
      } catch (err) {
        console.error("Erreur lors de la récupération des données:", err);
        setError(err);
      }
    };

    fetchData();
  }, [projectId]);

  if (error) return <div>Erreur: {error.message}</div>;
  if (!project) return <div>Chargement...</div>;

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      {/* Afficher les commentaires */}
      {comments.map(comment => (
        <div key={comment.id}>{comment.text}</div>
      ))}
    </div>
  );
};

export default Project;
