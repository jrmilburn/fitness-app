import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

export default function Layout() {
  return (
    <div className="flex h-screen">
      {/* Navbar on the left */}
      <div className="w-80">
        <Navbar />
      </div>

      {/* Content on the right */}
      <div className="flex-1 bg-gray-100 p-8 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}