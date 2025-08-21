import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { onboardUser } from '../service/user';
import type { User } from '../type/user';

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subscription, setSubscription] = useState('Free');
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const newUser: Omit<User, 'id' | 'createdAt' | 'active'> = {
        name,
        email,
        subscriptionType: subscription,
        password
      };
      await onboardUser(newUser);
      navigate('/dashboard');
    } catch (err) {
      setError('Failed to register user');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1 font-bold">Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-500"
              placeholder='Enter your username'
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-bold">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-500"
              placeholder='Enter your email address'
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-bold">Subscription Type</label>
            <select
              value={subscription}
              onChange={e => setSubscription(e.target.value)}
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            >
              <option value="Free">Free</option>
              <option value="Pro">Pro</option>
              <option value="Enterprise">Enterprise</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-bold">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-bold">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-500"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            {loading ? 'Registering...' : 'Sign Up'}
          </button>
          <p className="text-sm text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log in here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;

