import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../service/user';
import { useAuth } from '../context/AuthContext';
import { validateLoginForm } from '../utils/validation';
import ErrorMessage from './common/ErrorMessage';
import PasswordField from './common/PasswordField';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { dispatch } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const validatedError = validateLoginForm({email, password});
    if(validatedError){
      setError(validatedError);
      return;
    }
    setLoading(true);

    try {
      const userDetails = await loginUser({ email, password });
      dispatch({type: 'LOGIN', payload: {user: userDetails.user, token: 'mock-token-123'}});
      navigate('/dashboard');
    } catch (err: any) {
      setError(err?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 px-4'>
      <div className='bg-white p-8 rounded shadow-md w-full max-w-md'>
        <h1 className='text-2xl font-bold mb-2 text-center'>Login</h1>
        <p className='text-sm text-gray-600 mb-6 text-center'>Access your dashboard</p>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block text-gray-700 mb-1'>Email</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-500'
              placeholder='Enter your email address'
            />
          </div>
          <PasswordField
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your passowrd'
            required
          />
          {error && <ErrorMessage message={error}/>}

          <button
            type='submit'
            disabled={loading}
            className='w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition'
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <p className='text-sm text-center mt-2'>
            Don’t have an account?{' '}
            <Link to='/signup' className='text-green-600 hover:underline'>
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
