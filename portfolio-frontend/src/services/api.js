// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Utilise l'URL définie dans .env
});

export const registerUser = (data) => api.post('/register', data);
export const loginUser = (data) => api.post('/login', data);
export const postComment = (projectId, data) => api.post(`/projects/${projectId}/comments`, data);
export const getComments = (projectId) => api.get(`/projects/${projectId}/comments`);
export const getProjects = () => api.get('/projects');
export const contactForm = (data) => api.post('/contact', data);

export default api;
