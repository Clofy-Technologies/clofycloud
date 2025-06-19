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
                className={`block px-3 py-2 rounded ${location.pathname === '/user-management' || location.pathname.includes('/profile') ? 'bg-primary text-primary-foreground font-medium' : 'hover:bg-accent hover:text-accent-foreground'}`}
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
        {/* Back to home button */}
        <Link
          to="/"
          className="block px-3 py-2 rounded bg-primary text-primary-foreground font-medium mt-auto flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          Back to home
        </Link>
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