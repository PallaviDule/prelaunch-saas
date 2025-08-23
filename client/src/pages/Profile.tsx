import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Header from './Header';
import { deleteUserAccount } from '../service/user';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className='min-h-screen bg-gray-50'>
        <Header />
        <main className='max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md'>
          <p>Please log in to view profile.</p>
        </main>
      </div>
    );
  }

  const handleDownloadData = () => {
    const { id, active, ...userData } = user;
    const blob = new Blob([JSON.stringify(userData, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-data.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDeleteAccount = async() => {
    if (window.confirm('Are you sure you want to delete your account?')) {
       try {
        await deleteUserAccount(user?.id);
        alert('Account deletion request submitted!');
        logout();
        navigate('/login');
      } catch (error) {
        console.error(error);
        alert('Failed to delete account.');
      }
    }
  };

  const handleUpdateDetails = () => {
    alert('Update details clicked.');
  };

  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString();
  };

  return (
    <div className='min-h-screen bg-gray-50 '>
      <Header />
      <main className='max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-10'>
        {/* Top Buttons */}
        <div className='flex flex-row gap-4 justify-end p-4'>
          <button
            onClick={handleDownloadData}
            className='hover:underline hover:text-blue-700 text-sm'
          >
            Download Data
          </button>
          <button
            onClick={handleUpdateDetails}
            className='hover:text-blue-700 hover:underline text-sm'
          >
            Update Details
          </button>
          <button
            onClick={handleDeleteAccount}
            className='hover:text-red-600 hover:underline text-sm'
          >
            Delete Account
          </button>
        </div>

        {/* Profile Content */}
        <div className='px-4'>
          <h1 className='text-2xl font-bold mb-4'>Profile Details</h1>
          <div className='grid grid-cols-1 gap-4'>
            <div>
              <label className='block text-gray-600'>Name</label>
              <input
                value={user.name}
                readOnly
                className='border p-2 w-full rounded'
              />
            </div>
            <div>
              <label className='block text-gray-600'>Email</label>
              <input
                value={user.email}
                readOnly
                className='border p-2 w-full rounded'
              />
            </div>
            <div>
              <label className='block text-gray-600'>Subscription</label>
              <input
                value={user.subscriptionType}
                readOnly
                className='border p-2 w-full rounded'
              />
            </div>
            <div>
              <label className='block text-gray-600'>Joined On</label>
              <input
                value={formatDate(user.createdAt)}
                readOnly
                className='border p-2 w-full rounded'
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;