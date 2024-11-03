const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Aucun token, accès refusé' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Ajoutez l'utilisateur décodé à la requête
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token invalide' });
    }
};

module.exports = authMiddleware;
