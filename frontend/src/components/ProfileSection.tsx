import React from 'react';

const ProfileSection: React.FC = () => {
  return (
    <div className="p-6 space-y-6 bg-card text-card-foreground rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-foreground">My Profile</h2>

      {/* Profile Information Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">Name</label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full p-2 border border-input bg-background text-foreground rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            defaultValue="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">Email</label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full p-2 border border-input bg-background text-foreground rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            defaultValue="john.doe@example.com"
          />
        </div>
      </div>

      {/* Update Profile Button */}
      <div className="flex justify-end">
        <button
          type="button"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Update Profile
        </button>
      </div>

      <hr className="my-6 border-border" />

      {/* Password Reset Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-foreground">Reset Password</h3>
        <div>
          <label htmlFor="current-password" className="block text-sm font-medium text-muted-foreground">Current Password</label>
          <input
            type="password"
            id="current-password"
            className="mt-1 block w-full p-2 border border-input bg-background text-foreground rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>

        <div>
          <label htmlFor="new-password" className="block text-sm font-medium text-muted-foreground">New Password</label>
          <input
            type="password"
            id="new-password"
            className="mt-1 block w-full p-2 border border-input bg-background text-foreground rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>

        <div>
          <label htmlFor="confirm-password" className="block text-sm font-medium text-muted-foreground">Confirm New Password</label>
          <input
            type="password"
            id="confirm-password"
            className="mt-1 block w-full p-2 border border-input bg-background text-foreground rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>
      </div>

      {/* Reset Password Button */}
      <div className="flex justify-end">
        <button
          type="button"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Reset Password
        </button>
      </div>

      <hr className="my-6 border-border" />

      {/* Data Export Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-foreground">Export Data</h3>
        <div>
          <p className="text-muted-foreground">Request a download of your personal data.</p>
          <button
            type="button"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Export Data
          </button>
        </div>

        <hr className="my-6 border-border" />

        {/* Account Deletion Section */}
        <div className="space-y-4 text-red-600">
          <h3 className="text-xl font-semibold text-destructive">Delete Account</h3>
          <div>
            <p className="text-muted-foreground">Permanently delete your account and all associated data.</p>
            <button
              type="button"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-destructive-foreground bg-destructive hover:bg-destructive-foreground hover:text-destructive focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-destructive"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    
  </div>
  );
};

export default ProfileSection;