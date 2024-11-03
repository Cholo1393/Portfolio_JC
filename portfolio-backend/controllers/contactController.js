// controllers/contactController.js
const Contact = require('../models/contactModel');

exports.createContactMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newMessage = await Contact.create({ name, email, message });
        res.status(201).json({ message: 'Message reçu avec succès.', data: newMessage });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de l\'enregistrement du message.' });
    }
};
