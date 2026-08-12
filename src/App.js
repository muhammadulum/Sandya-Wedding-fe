import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import GuestsPage from "./pages/pege-brown/GuestsPage";
import RSVPPage from "./pages/pege-brown/RSVPPage";
import SettingsPage from "./pages/SettingsPage";
import AdminLayout from "./pages/AdminLayout";
import Envelope from "./components/theme_brown/Envelope";

import EnvelopeGreen from "./components/theme_green/Envelope";

const PrivateRoute = ({ children }) => {
  const { token } = useAuth();
  return token ? children : <LoginPage />;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <AdminLayout>
                  <Dashboard />
                </AdminLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/guests"
            element={
              <PrivateRoute>
                <AdminLayout>
                  <GuestsPage />
                </AdminLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/rsvp"
            element={
              <PrivateRoute>
                <AdminLayout>
                  <RSVPPage />
                </AdminLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <AdminLayout>
                  <SettingsPage />
                </AdminLayout>
              </PrivateRoute>
            }
          />
          <Route path="/wedding-brown" element={<Envelope />} />
          <Route path="/wedding-green" element={<EnvelopeGreen />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
