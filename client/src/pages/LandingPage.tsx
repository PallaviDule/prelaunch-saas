import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signup");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header/>


      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl font-bold mb-4">Welcome to Green SaaS</h2>
        <p className="text-gray-700 max-w-xl mb-8">
          Join us in building a sustainable future with clean energy solutions.
        </p>
        <button
          onClick={handleGetStarted}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Get Started
        </button>

        <section className="mt-20 max-w-3xl text-gray-600">
          <h3 className="text-2xl font-semibold mb-4">Why Join?</h3>
          <p>
            Our platform helps companies achieve carbon neutrality by providing
            tools to manage green energy solutions efficiently and intuitively.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-gray-300 text-sm text-center py-3">
        <p>Contact us: info@greensaas.com | Address: Berlin, Germany</p>
        <p className="mt-1">&copy; {new Date().getFullYear()} Green SaaS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;

