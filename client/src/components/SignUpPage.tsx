import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { onboardUser } from '../service/user';
import type { User } from '../type/user';
import { useAuth } from '../context/AuthContext';
import { subscriptionPlans } from '../data/dashboardData';
import { validateSignupForm } from '../utils/validation';
import ErrorMessage from './common/ErrorMessage';
import PasswordField from './common/PasswordField';

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const {state, dispatch} = useAuth();
  const {chosenPlan} = state;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePlanChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = subscriptionPlans.find(plan => plan.type === e.target.value);
    if (selected) {
      dispatch({ type: 'SET_PLAN', payload: selected });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const validateError = validateSignupForm({name, email, password, confirmPassword});

    if(validateError){
      setError(validateError);
      return;
    }
    setLoading(true);

    try {
      const newUser: Omit<User, 'id' | 'createdAt' | 'active'> = {
        name,
        email,
        subscriptionType: chosenPlan.type,
        password
      };
      const userResponse = await onboardUser(newUser);
      dispatch({type: 'LOGIN', payload: {user: userResponse, token: 'mock-token-456'}});
      navigate('/dashboard');
    } catch (err) {
      setError('Failed to register user');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4'>
      <div className='bg-white p-8 rounded shadow-md w-full max-w-md'>
        <h1 className='text-2xl font-bold mb-6 text-center'>Sign Up</h1>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block text-gray-700 mb-1 font-bold'>Name</label>
            <input
              type='text'
              value={name}
              onChange={e => setName(e.target.value)}
              required
              className='w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-black'
              placeholder='Enter your username'
            />
          </div>

          <div>
            <label className='block text-gray-700 mb-1 font-bold'>Email</label>
            <input
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className='w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-black'
              placeholder='Enter your email address'
            />
          </div>

          <div>
            <label className='block text-gray-700 mb-1 font-bold'>Subscription Type</label>
            <select
              value={chosenPlan.type}
              onChange={handlePlanChange}
              className='w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-black'
            >
              {subscriptionPlans.map((plan) => 
                <option value={plan.type}>{plan.type}</option>)
              }
            </select>
          </div>
          <PasswordField
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder = 'Enter your password'
            required
          />
          <PasswordField
            label="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder = 'Enter your confirm password'
            required
          />
          {error && <ErrorMessage message={error}/>}
          <button
            type='submit'
            disabled={loading}
            className='w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition'
          >
            {loading ? 'Registering...' : 'Sign Up'}
          </button>
          <p className='text-sm text-center'>
            Already have an account?{' '}
            <Link to='/login' className='text-green-700 hover:underline hover:text-green-800'>
              Log in here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;

