import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
// Remove imports for section components as they will be routed in App.tsx
// import ProfileSection from '../components/ProfileSection';
// import SubscriptionSection from '../components/SubscriptionSection';
// import SavedSolutionsSection from '../components/SavedSolutionsSection';
// import UpgradeSection from '../components/UpgradeSection';
// import SupportSection from '../components/SupportSection';

const UserManagement: React.FC = () => {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="w-64 bg-card text-card-foreground border-r p-4 flex flex-col">
        {/* Updated logo text to use primary color for branding consistency */}
        <div className="text-2xl font-bold text-primary mb-8">Clofy Cloud</div>
        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <Link
                to="/user-management/subscription"
                className={`block px-3 py-2 rounded ${location.pathname.includes('/subscription') ? 'bg-primary text-primary-foreground font-medium' : 'hover:bg-accent hover:text-accent-foreground'}`}
              >
                My Subscription
              </Link>
            </li>
            <li>
              <Link
                to="/user-management/profile"
                className={`block px-3 py-2 rounded ${location.pathname.includes('/profile') ? 'bg-primary text-primary-foreground font-medium' : 'hover:bg-accent hover:text-accent-foreground'}`}
              >
                My Profile
              </Link>
            </li>
            <li>
              <Link
                to="/user-management/saved-solutions"
                className={`block px-3 py-2 rounded ${location.pathname.includes('/saved-solutions') ? 'bg-primary text-primary-foreground font-medium' : 'hover:bg-accent hover:text-accent-foreground'}`}
              >
                My Saved Solutions
              </Link>
            </li>
            <li>
              <Link
                to="/user-management/upgrade"
                className={`block px-3 py-2 rounded ${location.pathname.includes('/upgrade') ? 'bg-primary text-primary-foreground font-medium' : 'hover:bg-accent hover:text-accent-foreground'}`}
              >
                Upgrade
              </Link>
            </li>
            <li>
              <Link
                to="/user-management/support"
                className={`block px-3 py-2 rounded ${location.pathname.includes('/support') ? 'bg-primary text-primary-foreground font-medium' : 'hover:bg-accent hover:text-accent-foreground'}`}
              >
                Support
              </Link>
            </li>
          </ul>
        </nav>
        {/* Adjusted text color for copyright */}
        <div className="mt-4 text-sm text-muted-foreground">© 2025 Clofy Technologies</div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto p-6">
        {/* Use Outlet to render nested routes */}
        <Outlet />
      </div>
    </div>
  );
};

export default UserManagement;