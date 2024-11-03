import React, { useEffect, useState } from 'react';
import { getProjects } from '../services/api';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getProjects();
        setProjects(response.data); // Assurez-vous que les données sont dans le format attendu
      } catch (err) {
        setError('Erreur lors de la récupération des projets');
        console.error(err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {projects.map(project => (
        <div key={project._id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
