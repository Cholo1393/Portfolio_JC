const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ message: 'Accès non autorisé, token manquant' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        if (!req.user) return res.status(401).json({ message: 'Utilisateur non trouvé' });
        next();
    } catch (error) {
        console.error("Erreur d'authentification:", error);
        res.status(401).json({ message: 'Token non valide' });
    }
};

module.exports = authMiddleware;
