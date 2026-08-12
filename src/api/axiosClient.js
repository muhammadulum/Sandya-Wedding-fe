import axios from "axios";

// Support multiple environment styles:
// - Vite: import.meta.env.VITE_API_URL
// - Create React App / react-scripts: process.env.REACT_APP_API_URL
// Fallback to a sensible default.
const getBaseUrl = () => {
  try {
    // Safe access for import.meta.env (supported in Vite). Use try/catch because
    // referencing import.meta in non-Vite environments can throw or be unsupported.
    // @ts-ignore
    const viteUrl =
      import.meta && import.meta.env && import.meta.env.VITE_API_URL;
    if (viteUrl) return viteUrl;
  } catch (e) {
    // ignore — environment doesn't support import.meta
  }

  if (
    typeof process !== "undefined" &&
    process.env &&
    process.env.REACT_APP_API_URL
  ) {
    return process.env.REACT_APP_API_URL;
  }

  if (
    typeof process !== "undefined" &&
    process.env &&
    process.env.VITE_API_URL
  ) {
    return process.env.VITE_API_URL;
  }

  // default used by this project
  return "https://api.sandyatech.tech/api";
};

const axiosClient = axios.create({
  baseURL: getBaseUrl(),
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosClient;
