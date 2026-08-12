import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <div className="bg-white h-16 shadow flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold text-gray-700">Dashboard Admin</h1>
      <div className="flex items-center gap-3">
        <span className="text-gray-600 text-sm">
          Halo, {user ? JSON.parse(user).name : "Admin"}
        </span>
        <img
          src="https://ui-avatars.com/api/?name=Admin&background=0D8ABC&color=fff"
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
