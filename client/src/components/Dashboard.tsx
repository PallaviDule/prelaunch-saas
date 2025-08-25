import { subscription, activities } from '../data/dashboardData';
import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  if (!user) return <p className='text-center mt-10'>Please login to view dashboard.</p>;

  return (
    <div className='min-h-screen flex flex-col bg-gray-100'>
      <main className='flex-1 p-6'>
        <h2 className='text-2xl mb-6'>
          Welcome back, <span className='text-green-600'>{user?.name}</span>!
        </h2>

        {/* Subscription Section */}
        <section className='mb-8'>
          <h3 className='text-xl font-semibold mb-4'>Your Subscription</h3>
          <div className='p-6 bg-white rounded-xl shadow flex flex-col sm:flex-row justify-between items-start sm:items-center'>
            <div>
              <p className='text-lg font-medium'>{subscription.plan}</p>
              <p className='text-sm text-gray-500'>
                Status:{' '}
                <span
                  className={`font-semibold ${
                    subscription.status === 'active'
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {subscription.status}
                </span>
              </p>
              <p className='text-sm text-gray-500'> Renewal Date: {subscription.renewalDate} </p>
              <p className='text-sm text-gray-500'>Price: {subscription.price}</p>
            </div>
            <button className='mt-4 sm:mt-0 px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700'>
              Manage Plan
            </button>
          </div>
        </section>

        {/* Activity Section */}
        <section>
          <h3 className='text-xl font-semibold mb-4'>Recent Activity</h3>
          <div className='bg-white rounded-xl shadow p-6'>
            {activities.length > 0 ? (
              <ul className='space-y-3'>
                {activities.map((activity) => (
                  <li
                    key={activity.id}
                    className='flex justify-between border-b pb-2 last:border-none'
                  >
                    <span>{activity.action}</span>
                    <span className='text-sm text-gray-500'>{activity.date}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className='text-gray-500'>No recent activity.</p>
            )}
          </div>
        </section>
      </main>

      <footer className='p-4 text-center text-gray-500 text-sm'>
        © 2025 MyApp
      </footer>
    </div>
  );
};

export default Dashboard;