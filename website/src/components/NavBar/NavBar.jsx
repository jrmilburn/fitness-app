import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/Authcontext';
import { useContext } from 'react';

export default function Navbar() {

  const { logout } = useContext(AuthContext);

  const handleLogout = () => {

    logout();

  }

  return (
    <div className="h-full w-full bg-gray-800 text-white flex flex-col items-center p-4">
      {/* Logo */}
      <div className="mb-8">
        <img src="/logo.png" alt="Company Logo" className="w-24 h-24" />
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col justify-around items-left w-full h-full">

        <div className='flex flex-col space-y-4'>
          <NavLink
            to="/app"
            className={({ isActive }) =>
              isActive ? 'bg-gray-700 text-white py-2 px-4 rounded' : 'text-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 rounded'
            }
          >
            Current Workout
          </NavLink>
          <NavLink
            to="/app/mesocycles"
            className={({ isActive }) =>
              isActive ? 'bg-gray-700 text-white py-2 px-4 rounded' : 'text-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 rounded'
            }
          >
            Programs
          </NavLink>
          <NavLink
            to="/app/mesocycles/create"
            className={({ isActive }) =>
              isActive ? 'bg-gray-700 text-white py-2 px-4 rounded' : 'text-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 rounded'
            }
          >
            Create a new program
          </NavLink>
        </div>

        <div className='flex flex-col space-y-4'>

          <NavLink
            to='/app/profile'
            className={({ isActive }) =>
              isActive ? 'bg-gray-700 text-white py-2 px-4 rounded' : 'text-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 rounded'
            } >
              Profile
            </NavLink>
          <NavLink
            to="/app/contact"
            className={({ isActive }) =>
              isActive ? 'bg-gray-700 text-white py-2 px-4 rounded' : 'text-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 rounded'
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/app/settings"
            className={({ isActive }) =>
              isActive ? 'bg-gray-700 text-white py-2 px-4 rounded' : 'text-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 rounded'
            } >
              Settings
          </NavLink>
          <button onClick={handleLogout}
            className='text-gray-200 hover:bg-gray-700 hover:text-white py-2 px-4 rounded'
            >
            Log out
          </button>

        </div>

      </nav>
    </div>
  );
}