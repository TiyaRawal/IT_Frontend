import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL || "https://it-backend-s4gz.onrender.com";

const api = axios.create({
  baseURL: baseURL,
});

export default api;
export { baseURL };