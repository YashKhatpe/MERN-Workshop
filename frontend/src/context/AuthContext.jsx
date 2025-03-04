import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

// const API_URL = import.meta.env.MODE === 'prodcution' ? import.meta.env.VITE_BACKEND_URL : 'http://localhost:5000';
const API_URL = import.meta.env.VITE_BACKEND_URL;
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    if (token) {
      axios.get(`${API_URL}/api/auth/me`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => setUser(res.data))
      .catch(() => logout());
    }
  }, [token]);

  const login = async (email, password) => {
    try {
      const res = await axios.post(`${API_URL}/api/auth/login`, { email, password });
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      return res.data.status; // Return the status code (200)
  } catch (error) {
      console.error("Login error:", error.response?.data?.msg || error.message);
      return error.response?.status || 500; // Return error status
  }
  };

  const signup = async (name, email, password) => {
    await axios.post(`${API_URL}/api/auth/register`, {name, email, password});
  }

  const logout = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
