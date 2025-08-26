import { subscription, activities, subscriptionPlans } from '../data/dashboardData';
import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  if (!user) return <p className='text-center mt-10'>Please login to view dashboard.</p>;
  const userPlan = subscriptionPlans.find(plan => plan.type === user.subscriptionType) || subscriptionPlans[0];
  const otherPlans = subscriptionPlans.filter(plan => plan.type !== user.subscriptionType);

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
              <p className='text-lg font-medium'>{userPlan.type}</p>
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
         {/* Other Plans */}
         <section className='mb-8'>
           <h3 className='text-xl font-semibold mb-4'>Other Plans</h3>
           <div className='flex justify-between gap-2'>
             {otherPlans.map(plan => (
              <div
                key={plan.type}
                className='p-2 bg-gray-50 rounded-lg border border-gray-200 shadow-sm w-1/2'
              >
                <p className='text-md font-medium'>{plan.type}</p>
                <p className='text-sm text-gray-500'>Price: {plan.price}</p>
                {plan.features && (
                  <ul className='list-disc pl-4 text-xs text-gray-500 mt-1'>
                    {plan.features.map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>
                )}
                <button className='mt-2 px-2 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700'>
                  Upgrade
                </button>
              </div>
            ))}
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

      <footer className='p-4 text-center text-gray-500 text-sm bg-gray-200'>
        © 2025 MyApp
      </footer>
    </div>
  );
};

export default Dashboard;
