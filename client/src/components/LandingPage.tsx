import React from 'react';
import { useNavigate } from 'react-router-dom';
import { subscriptionPlans, type SubscriptionPlan } from '../data/dashboardData';
import { useAuth } from '../context/AuthContext';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const {state, dispatch} = useAuth();

  const handleGetStarted = (planType : SubscriptionPlan): void => {
    navigate('/signup');
    dispatch({type: 'SET_PLAN', payload: planType})
  };

  return (
    <div className='min-h-screen flex flex-col bg-gray-50'>
      {/* Hero Section */}
      <main className='flex-1 flex flex-col items-center justify-center text-center px-6 py-16'>
        <h1 className='text-5xl font-bold mb-4 text-green-600'>Green SaaS</h1>
        <p className='text-gray-700 max-w-2xl mb-8 text-lg'>
          Build a sustainable future with our clean energy management platform. Manage subscriptions, track activity, and make data-driven decisions.
        </p>
        <button
          onClick={() => handleGetStarted(state.chosenPlan)}
          className='bg-green-600 text-white px-4 py-1 rounded-lg shadow hover:bg-green-700 transition'
        >
          Get Started
        </button>
      </main>

      {/* Features Section */}
      <section className='bg-white py-12'>
        <h2 className='text-3xl font-semibold text-center mb-8'>Why Join?</h2>
        <div className='flex flex-col sm:flex-row justify-center items-stretch gap-6 px-6 max-w-5xl mx-auto'>
          <div className='bg-gray-50 p-6 rounded-lg shadow flex-1'>
            <h3 className='text-xl font-bold mb-2'>Seamless Subscription</h3>
            <p className='text-gray-600 text-sm'>
              Easily manage your subscription plan and upgrade anytime with a click.
            </p>
          </div>
          <div className='bg-gray-50 p-6 rounded-lg shadow flex-1'>
            <h3 className='text-xl font-bold mb-2'>Secure & GDPR Ready</h3>
            <p className='text-gray-600 text-sm'>
              Your data is safe, compliant with GDPR, and handled with care.
            </p>
          </div>
          <div className='bg-gray-50 p-6 rounded-lg shadow flex-1'>
            <h3 className='text-xl font-bold mb-2'>Easy Onboarding</h3>
            <p className='text-gray-600 text-sm'>
              Sign up quickly and start using the platform immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className='py-12 bg-gray-50'>
        <h2 className='text-3xl font-semibold text-center mb-8'>Plans Overview</h2>
        <div className='flex flex-col sm:flex-row justify-center items-stretch gap-6 px-6 max-w-5xl mx-auto'>
          {subscriptionPlans.map((plan) => (
            <div key={plan.type} className='bg-white p-6 rounded-lg shadow flex-1 text-center'>
              <h3 className='text-xl font-bold mb-2'>{plan.type}</h3>
              <p className='text-gray-700 font-medium mb-4'>{plan.price}/month</p>
              <ul className='text-gray-600 text-sm mb-4'>
                {plan.features.map((f, idx) => (
                  <li key={idx}>• {f}</li>
                ))}
              </ul>
              <button
                onClick={() => handleGetStarted(plan)}
                className='bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition text-sm'
              >
                Choose {plan.type}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className='w-full bg-gray-800 text-gray-300 text-sm text-center py-4'>
        <p>Contact: info@greensaas.com | Address: Berlin, Germany</p>
        <p className='mt-1'>&copy; {new Date().getFullYear()} Green SaaS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
