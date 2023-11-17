import axios from 'axios';

const BACKEND_API_URL = import.meta.env.VITE_BACKEND_API_URL + 'projects/';

// Create a New Project
const createProject = async (projectData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.post(BACKEND_API_URL, projectData, config);

  return res.data;
};

const projectService = {
  createProject,
};

export default projectService;
