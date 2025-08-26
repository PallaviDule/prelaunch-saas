import React from 'react';

const About: React.FC = () => {
  return (
    <div className='min-h-screen flex flex-col bg-gray-50'>
      <main className='flex-1 flex flex-col items-center justify-center text-center'>
        <h1 className='text-4xl font-bold mb-4 text-green-600'>About Green SaaS</h1>
        <p className='text-gray-700 max-w-2xl mb-8 text-lg'>
          Green SaaS is a platform dedicated to helping companies manage clean energy solutions,
          track subscriptions, and make data-driven decisions to achieve carbon neutrality.
        </p>
        <p className='text-gray-600 max-w-xl'>
          Our mission is to empower businesses to adopt sustainable practices through intuitive
          and efficient software tools, while ensuring GDPR compliance and security.
        </p>
      </main>
    </div>
  );
};

export default About;
