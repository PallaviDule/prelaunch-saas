import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state, dispatch } = useAuth();
  const { isLoggedIn } = state;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/login');
  };

  const links = !isLoggedIn
    ? [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Signup', path: '/signup' },
        { label: 'Login', path: '/login' },
      ]
    : [
        { label: 'Dashboard', path: '/dashboard' },
        { label: 'Profile', path: '/profile' },
        { label: 'About', path: '/about' },
      ];

  return (
    <header className='w-full bg-white shadow-md'>
      <div className='flex items-center justify-between px-6 py-4'>
        <h1 className='text-xl font-bold text-green-600 cursor-pointer' onClick={() => navigate('/')}> Green SaaS </h1>
        <nav className='hidden md:flex gap-6 text-gray-700'>
          {links.map(link => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              className={`hover:text-green-600 transition ${location.pathname === link.path ? 'text-green-600 font-semibold' : ''}`}
            >
              {link.label}
            </button>
          ))}
          {isLoggedIn && <button onClick={handleLogout} className='hover:text-red-600 transition'> Logout </button>}
        </nav>
        {/* Mobile Hamburger */}
        <div className='md:hidden'>
          <button onClick={() => setMobileOpen(!mobileOpen)} className='text-gray-700 focus:outline-none'>
            ☰
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className='md:hidden flex flex-col gap-2 px-6 pb-4'>
          {links.map(link => (
            <button
              key={link.path}
              onClick={() => { navigate(link.path); setMobileOpen(false); }}
              className={`text-left hover:text-green-600 transition ${location.pathname === link.path ? 'text-green-600 font-semibold' : ''}`}
            >
              {link.label}
            </button>
          ))}
          {isLoggedIn && <button onClick={handleLogout} className='text-left hover:text-red-600 transition'> Logout </button>}
        </div>
      )}
    </header>
  );
};

export default Header;
