// src/components/CommentForm.js

import React, { useState } from 'react';
import { postComment } from '../services/api'; // Assurez-vous que le chemin est correct

const CommentForm = ({ projectId }) => {
    const [comment, setComment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const commentData = {
            projectId,
            content: comment,
        };
        
        await postComment(commentData);
        setComment('');
        // Ici, vous pouvez également gérer l'affichage d'un message de succès ou réinitialiser la liste des commentaires
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Laissez un commentaire"
                required
            />
            <button type="submit">Envoyer</button>
        </form>
    );
};

export default CommentForm;
