import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  return (
    <header className='w-full bg-white shadow-md'>
      <div className='flex items-center justify-between px-6 py-4'>
        <h1 className='text-xl font-bold text-green-600 cursor-pointer' onClick={() => navigate('/')}> Green SaaS </h1>

        <nav className='flex gap-6 text-gray-700'>
          {!isLoggedIn ? (
            <>
              <button onClick={() => navigate('/')} className='hover:text-green-600 transition'> Home </button>
              <button onClick={() => navigate('/signup')} className='hover:text-green-600 transition'> Signup </button>
              <button onClick={() => navigate('/login')} className='hover:text-green-600 transition'> Login </button>
            </>
          ) : (
            <>
              <button onClick={() => navigate('/dashboard')} className='hover:text-green-600 transition'> Dashboard </button>
              <button onClick={() => navigate('/profile')} className='hover:text-green-600 transition'> Profile </button>
              <button
                onClick={() => {
                  logout();
                  navigate('/login');
                }}
                className='hover:text-red-600 transition'
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
