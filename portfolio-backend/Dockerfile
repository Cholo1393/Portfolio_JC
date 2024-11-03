# Utilise une image de base Node.js
FROM node:18

# Crée un dossier de travail
WORKDIR /app

# Copie les fichiers package.json et package-lock.json dans le conteneur
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie le reste des fichiers de l'application
COPY . .

# Définit la variable d'environnement pour le port utilisé
ENV PORT 5000

# Expose le port pour l'application
EXPOSE 5000

# Démarre l'application
CMD ["npm", "start"]
