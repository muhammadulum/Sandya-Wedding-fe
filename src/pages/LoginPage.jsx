import { useState } from "react";
import axiosClient from "../api/axiosClient";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!username.trim() || !password) {
      setError("Masukkan username dan password");
      return;
    }

    setLoading(true);
    try {
      // backend expects email in original project; try username first, fall back to email
      const payload = { username, password };
      const res = await axiosClient.post(
        "http://localhost:5000/api/auth/login",
        payload
      );
      login(res.data.user, res.data.token);
      navigate("/dashboard");
    } catch (err) {
      // try falling back to email field to be tolerant with existing backend
      try {
        const res2 = await axiosClient.post(
          "http://localhost:5000/api/auth/login",
          {
            email: username,
            password,
          }
        );
        login(res2.data.user, res2.data.token);
        navigate("/dashboard");
      } catch (err2) {
        setError("Login gagal, periksa kembali username dan password");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white to-gray-100">
      <div className="w-full max-w-md p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
        >
          <h1 className="text-3xl font-extrabold mb-4 text-center text-gray-800">
            Masuk Admin
          </h1>
          <p className="text-sm text-gray-500 mb-6 text-center">
            Masukkan username dan password Anda
          </p>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded mb-4">
              {error}
            </div>
          )}

          <label className="block mb-4">
            <span className="text-sm font-medium text-gray-700">Username</span>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2"
              required
            />
          </label>

          <label className="block mb-4 relative">
            <span className="text-sm font-medium text-gray-700">Password</span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2 pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-2 top-9 text-sm text-gray-500 hover:text-gray-700"
            >
              {showPassword ? "Sembunyikan" : "Tampilkan"}
            </button>
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white py-2 rounded-md font-medium transition"
          >
            {loading ? "Memproses..." : "Masuk"}
          </button>

          <p className="text-xs text-gray-400 mt-4 text-center">
            Lupa password? Hubungi administrator.
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
