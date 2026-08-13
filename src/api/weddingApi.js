import axios from "axios";

const getApiBase = () => {
  try {
    // Vite environment
    // @ts-ignore
    const v =
      import.meta && import.meta.env && import.meta.env.VITE_API_BASE_URL;
    if (v) return v;
  } catch (e) {
    // ignore
  }

  if (typeof process !== "undefined" && process.env) {
    if (process.env.REACT_APP_API_BASE_URL)
      return process.env.REACT_APP_API_BASE_URL;
    if (process.env.VITE_API_BASE_URL) return process.env.VITE_API_BASE_URL;
  }

  return "https://api.wedding.sandyatech.tech/api";
};

const API_BASE = getApiBase();

export const getWeddingInfo = async () => {
  const res = await axios.get(`${API_BASE}/wedding`);
  return res.data;
};

export default { getWeddingInfo };
