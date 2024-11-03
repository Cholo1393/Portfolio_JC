// src/components/ProjectComments.js
import React, { useState, useEffect } from 'react';
import { getComments, postComment } from '../services/api';

const ProjectComments = ({ projectId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const isAuthenticated = !!localStorage.getItem('token'); // Vérifier si l'utilisateur est authentifié
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
    <div className="comments-section p-4 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 animate-bounce text-center">Commentaires</h2>
      <div className="comments-list mb-4 space-y-2">
        {comments.map((c, index) => (
          <div key={index} className="comment-item p-3 bg-gray-100 rounded-md shadow-sm transition transform hover:shadow-lg hover:bg-gray-200">
            <p className="font-medium"><strong>{c.userId.username}</strong>: {c.comment}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleCommentSubmit} className="comment-form">
        {isAuthenticated ? (
          <>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Ajoutez votre commentaire..."
              rows="4"
              required
              className="comment-input w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 resize-none"
            />
            {error && <p className="error text-red-500 mb-2">{error}</p>}
            <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">
              Commenter
            </button>
          </>
        ) : (
          <p className="text-red-500 mb-2 text-center">Veuillez vous connecter pour commenter.</p>
        )}
      </form>
    </div>
  );
};

export default ProjectComments;
