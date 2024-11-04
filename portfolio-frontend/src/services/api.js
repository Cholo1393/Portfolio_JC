// src/services/api.js

import axios from 'axios';

// Création d'une instance Axios avec une URL de base
const api = axios.create({
    baseURL: 'https://portfolio-backend-jc.fly.dev/api',
});

// Intercepteur pour inclure le token d'authentification
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Fonctions d'API
export const registerUser = async (userData) => {
    return await api.post('/auth/register', userData);
};

export const loginUser = async (userData) => {
    return await api.post('/auth/login', userData);
};

export const postComment = async (projectId, commentData) => {
    return await api.post(`/comments/${projectId}`, commentData);
};

export const getComments = async (projectId) => {
    try {
        const response = await api.get(`/comments/${projectId}`);
        return response.data; // Assurez-vous de retourner les données directement
    } catch (error) {
        console.error("Erreur lors de la récupération des commentaires:", error);
        throw error; // Relancer l'erreur pour qu'elle soit capturée ailleurs
    }
};

export const getProjects = async () => {
    try {
        const response = await api.get('/projects');
        return response.data; // Retourne les données directement
    } catch (error) {
        console.error("Erreur lors de la récupération des projets:", error);
        throw error; // Relancer l'erreur pour qu'elle soit capturée ailleurs
    }
};

export const getProject = async (projectId) => {
    try {
        const response = await api.get(`/projects/${projectId}`);
        return response.data; // Assurez-vous de retourner les données
    } catch (error) {
        console.error(`Erreur lors de la récupération du projet ${projectId}:`, error);
        throw error;
    }
};

export const contactForm = async (contactData) => {
    return await api.post('/contact', contactData);
};

export default api;
