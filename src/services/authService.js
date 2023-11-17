import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_API_URL + '/users/';

// Register User
const register = async (userData) => {
  const res = await axios.post(API_URL + 'register', userData);

  if (res.data) {
    localStorage.setItem('culiliuser', JSON.stringify(res.data));
  }

  return res.data;
};

// Login User
const login = async (userData) => {
  const res = await axios.post(API_URL + 'login', userData);

  if (res.data) {
    localStorage.setItem('culiliuser', JSON.stringify(res.data));
  }

  return res.data;
};

// Logout User
const logout = () => {
  localStorage.removeItem('culiliuser');
};

// Get Current User
const getCurrentUser = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.get(API_URL + 'currentuser', config);

  return res.data;
};

const authService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default authService;
