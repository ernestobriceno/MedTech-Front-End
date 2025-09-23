import React, {useContext} from 'react';
import { UserRoleContext } from '../context/UserRoleContext';
import medtechicon from '../assets/medtech.png';
import { useNavigate } from 'react-router-dom';

export const Header: React.FC = () => {
  const { setUserRole } = useContext(UserRoleContext);
  const navigate = useNavigate();
  const handleSignOut = () => {
    setUserRole('');
    localStorage.clear();
    navigate('/');
  }
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="w-20 h-12 mb-4">
            <img src={medtechicon} alt="Medtech" />
          </div>
          <button
            type="submit"
            className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      </div>
    </header>
  );
}