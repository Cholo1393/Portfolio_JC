// src/components/ProjectComments.js
import React, { useState, useEffect } from 'react';
import { getComments, postComment } from '../services/api';

const ProjectComments = ({ projectId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
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
    } catch (err) {
      setError("Erreur lors de l'ajout du commentaire.");
      console.error(err);
    }
  };

  return (
    <div className="comments-section">
      <h2>Commentaires</h2>
      <div className="comments-list">
        {comments.map((c, index) => (
          <div key={index} className="comment-item">
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
          className="comment-input"
        />
        {error && <p className="error">{error}</p>}
        <button type="submit" disabled={!isAuthenticated}>
          {isAuthenticated ? "Commenter" : "Connexion requise"}
        </button>
      </form>
    </div>
  );
};

export default ProjectComments;
