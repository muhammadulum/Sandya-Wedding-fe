import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const menuItems = [
    { name: "Dashboard", icon: "🏠", path: "/dashboard" },
    { name: "Tamu Undangan", icon: "👥", path: "/guests" },
    { name: "RSVP", icon: "📅", path: "/rsvp" },
    { name: "Pengaturan", icon: "⚙️", path: "/settings" },
  ];

  return (
    <div className="h-screen bg-gray-900 text-gray-100 w-64 flex flex-col">
      <div className="text-center py-6 text-xl font-bold border-b border-gray-700">
        💍 Wedding Admin
      </div>
      <nav className="flex-1 mt-6">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-5 py-2.5 text-sm hover:bg-gray-800 transition ${
                isActive ? "bg-gray-800 text-white" : "text-gray-400"
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-5 py-3 text-sm text-red-400 hover:bg-gray-800 border-t border-gray-700 transition"
      >
        <span className="inline-block">🔓</span> Keluar
      </button>
    </div>
  );
};

export default Sidebar;
