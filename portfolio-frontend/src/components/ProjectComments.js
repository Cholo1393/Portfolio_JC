// src/components/ProjectComments.js
import React, { useState, useEffect } from 'react';
import { getComments, postComment } from '../services/api';

const ProjectComments = ({ projectId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const isAuthenticated = !!localStorage.getItem('token'); // On peut garder cette ligne pour vérifier l'authentification
  const [error, setError] = useState('');

  useEffect(() => {
    // Charger les commentaires pour le projet
    const fetchComments = async () => {
      try {
        const response = await getComments(projectId);
        setComments(response.data);
      } catch (err) {
        console.error('Erreur lors du chargement des commentaires:', err);
      }
    };
    fetchComments();
  }, [projectId]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      setError("Veuillez vous connecter pour commenter.");
      return;
    }
    try {
      const response = await postComment(projectId, { comment: newComment });
      setComments([...comments, response.data.comment]);
      setNewComment('');
      setError(''); // Réinitialiser l'erreur après un envoi réussi
    } catch (err) {
      setError("Erreur lors de l'ajout du commentaire.");
      console.error(err);
    }
  };

  return (
    <div className="comments-section p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Commentaires</h2>
      <div className="comments-list mb-4">
        {comments.map((c, index) => (
          <div key={index} className="comment-item p-2 border-b border-gray-300">
            <p><strong>{c.userId.username}</strong>: {c.comment}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleCommentSubmit} className="comment-form">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Ajoutez votre commentaire..."
          rows="4"
          required
          className="comment-input w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {error && <p className="error text-red-500">{error}</p>}
        <button type="submit" disabled={!isAuthenticated} className={`mt-2 p-2 rounded-md text-white ${isAuthenticated ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'}`}>
          {isAuthenticated ? "Commenter" : "Connexion requise"}
        </button>
      </form>
    </div>
  );
};

export default ProjectComments;
