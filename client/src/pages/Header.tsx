import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header:  React.FC = () => {
    const navigate = useNavigate();
    
    return (
    <header className="w-full bg-white shadow-md">
        <div className="flex items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold text-green-600">Green SaaS</h1>
          <nav className="flex gap-6 text-gray-700">
            <button
              onClick={() => navigate("/")}
              className="hover:text-green-600 transition"
            >
              Home
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="hover:text-green-600 transition"
            >
              Signup
            </button>
            <button
              onClick={() => navigate("/login")}
              className="hover:text-green-600 transition"
            >
              Login
            </button>
          </nav>
        </div>
      </header>
  )
}

export default Header;