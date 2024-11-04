import axios from 'axios';

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

export const getCommentsByProjectId = async (projectId) => {
  const response = await axios.get(`/api/comments/${projectId}`);
  return response;
};

export const getProjects = async () => {
    return await api.get('/projects');
};

export const getProject = async (projectId) => {
    return await api.get(`/projects/${projectId}`);
};

export const contactForm = async (contactData) => {
    return await api.post('/contact', contactData);
};

export default api;
