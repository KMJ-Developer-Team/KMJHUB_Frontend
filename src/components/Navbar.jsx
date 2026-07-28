import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  async function handleLogout() {
    await logout();
    navigate("/login");
  }

  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <Link to="/" className="text-xl font-bold">
        KMJ Hub
      </Link>

      <div className="flex items-center gap-6">
        <Link to="/">Home</Link>

        {isAuthenticated ? (
          <>
            <span>{user.username}</span>

            <Link to="/profile">Profile</Link>

            <button type="button" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/reset-password">Reset Password</Link>
          </>
        )}
      </div>
    </nav>
  );
}