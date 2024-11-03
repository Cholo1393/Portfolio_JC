import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    useEffect(() => {
        emailjs.init("Ubqh3q6W7msFXIzhI");   
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        try {
            const result = await emailjs.sendForm("service_ln2gk3g", "template_k7fcfq4", form);
            console.log(result.text);
            alert("Email envoyé avec succès !");
        } catch (error) {
            console.error("Échec de l'envoi de l'email:", error);
            alert("Échec de l'envoi de l'email. Vérifiez la console pour plus de détails.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="user_name" placeholder="Votre nom" required />
            <input type="email" name="user_email" placeholder="Votre email" required />
            <textarea name="message" placeholder="Votre message" required />
            <button type="submit">Envoyer</button>
        </form>
    );
};

export default ContactForm;
