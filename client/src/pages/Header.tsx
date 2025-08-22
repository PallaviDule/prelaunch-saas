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
                onClick={() => {
                    navigate("/profile");
                }}
                className="hover:text-green-600 transition"
                >
                Profile
                </button>
                <button
                onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/login");
                }}
                className="hover:text-green-600 transition"
                >
                Logout
                </button>
            </nav>
            </div>
        </header>
    )
}

export default Header;