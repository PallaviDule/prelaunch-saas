import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Green SaaS</h1>
        <p className="text-gray-700 max-w-xl">
          Join us in building a sustainable future with clean energy solutions.
        </p>
      </header>

      <button
        onClick={handleGetStarted}
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Get Started
      </button>

      <section className="mt-20 max-w-3xl text-center text-gray-600">
        <h2 className="text-2xl font-semibold mb-4">Why Join?</h2>
        <p>
          Our platform helps companies achieve carbon neutrality by providing
          tools to manage green energy solutions efficiently and intuitively.
        </p>
      </section>
    </div>
  );
};

export default LandingPage;
