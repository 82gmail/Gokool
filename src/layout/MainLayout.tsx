import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Store, Home, ShoppingCart, Users, AlertCircle, Settings, LogOut } from 'lucide-react';

const MainLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar for larger screens */}
      <aside className="hidden md:flex md:flex-col md:w-64 bg-white shadow-sm border-r border-gray-100">
        <div className="flex items-center justify-center h-16 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            <Store className="h-6 w-6 text-teal-600" />
            <span className="text-xl font-bold text-gray-900">GoKool</span>
          </div>
        </div>
        <nav className="flex flex-col p-4 space-y-1 flex-1">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center px-4 py-3 rounded-md transition-colors ${
                isActive
                  ? 'bg-teal-50 text-teal-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`
            }
          >
            <Home className="h-5 w-5 mr-3" />
            <span>Dashboard</span>
          </NavLink>
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              `flex items-center px-4 py-3 rounded-md transition-colors ${
                isActive
                  ? 'bg-teal-50 text-teal-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`
            }
          >
            <ShoppingCart className="h-5 w-5 mr-3" />
            <span>Orders</span>
          </NavLink>
          <NavLink
            to="/vendors"
            className={({ isActive }) =>
              `flex items-center px-4 py-3 rounded-md transition-colors ${
                isActive
                  ? 'bg-teal-50 text-teal-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`
            }
          >
            <Store className="h-5 w-5 mr-3" />
            <span>Vendors</span>
          </NavLink>
          <NavLink
            to="/complaints"
            className={({ isActive }) =>
              `flex items-center px-4 py-3 rounded-md transition-colors ${
                isActive
                  ? 'bg-teal-50 text-teal-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`
            }
          >
            <AlertCircle className="h-5 w-5 mr-3" />
            <span>Complaints</span>
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `flex items-center px-4 py-3 rounded-md transition-colors ${
                isActive
                  ? 'bg-teal-50 text-teal-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`
            }
          >
            <Users className="h-5 w-5 mr-3" />
            <span>Users</span>
          </NavLink>
        </nav>
        <div className="p-4 border-t border-gray-100">
          <NavLink
            to="/settings"
            className="flex items-center px-4 py-3 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Settings className="h-5 w-5 mr-3" />
            <span>Settings</span>
          </NavLink>
          <NavLink
            to="/logout"
            className="flex items-center px-4 py-3 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <LogOut className="h-5 w-5 mr-3" />
            <span>Logout</span>
          </NavLink>
        </div>
      </aside>

      {/* Mobile bottom navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
        <div className="flex justify-around">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex flex-col items-center py-2 flex-1 ${
                isActive ? 'text-teal-600' : 'text-gray-600'
              }`
            }
          >
            <Home className="h-6 w-6" />
            <span className="text-xs mt-1">Home</span>
          </NavLink>
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              `flex flex-col items-center py-2 flex-1 ${
                isActive ? 'text-teal-600' : 'text-gray-600'
              }`
            }
          >
            <ShoppingCart className="h-6 w-6" />
            <span className="text-xs mt-1">Orders</span>
          </NavLink>
          <NavLink
            to="/vendors"
            className={({ isActive }) =>
              `flex flex-col items-center py-2 flex-1 ${
                isActive ? 'text-teal-600' : 'text-gray-600'
              }`
            }
          >
            <Store className="h-6 w-6" />
            <span className="text-xs mt-1">Vendors</span>
          </NavLink>
          <NavLink
            to="/complaints"
            className={({ isActive }) =>
              `flex flex-col items-center py-2 flex-1 ${
                isActive ? 'text-teal-600' : 'text-gray-600'
              }`
            }
          >
            <AlertCircle className="h-6 w-6" />
            <span className="text-xs mt-1">Issues</span>
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `flex flex-col items-center py-2 flex-1 ${
                isActive ? 'text-teal-600' : 'text-gray-600'
              }`
            }
          >
            <Users className="h-6 w-6" />
            <span className="text-xs mt-1">Users</span>
          </NavLink>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 overflow-auto pb-16 md:pb-0">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;