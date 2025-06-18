import React from 'react';

const SubscriptionSection: React.FC = () => {
  return (
    <main className="flex-1 p-8 bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6">My Subscription</h1>

      {/* Current Plan Details */}
      <section className="bg-card rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Current Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-muted-foreground">Plan Name:</p>
            <p className="text-lg font-medium text-foreground">Pro Annual</p>
          </div>
          <div>
            <p className="text-muted-foreground">Next Billing Date:</p>
            <p className="text-lg font-medium text-foreground">July 15, 2025</p>
          </div>
          <div>
            <p className="text-muted-foreground">Credits Included:</p>
            <p className="text-lg font-medium text-foreground">200 / year</p>
          </div>
          <div>
            <p className="text-muted-foreground">Price:</p>
            <p className="text-lg font-medium text-foreground">$75/year</p>
          </div>
        </div>
        <div className="mt-6 space-x-4">
          <button className="px-6 py-2 bg-destructive text-destructive-foreground rounded-md hover:bg-destructive-foreground hover:text-destructive transition-colors duration-200">Cancel Subscription</button>
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-foreground hover:text-primary transition-colors duration-200">Change Plan</button>
        </div>
      </section>

      {/* Billing History */}
      <section className="bg-card rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Billing History</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-muted text-muted-foreground">
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-left">Amount</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="px-4 py-2 text-foreground">July 15, 2024</td>
              <td className="px-4 py-2 text-foreground">Pro Annual Renewal</td>
              <td className="px-4 py-2 text-foreground">$75.00</td>
              <td className="px-4 py-2 text-green-600">Paid</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2 text-foreground">July 15, 2023</td>
              <td className="px-4 py-2 text-foreground">Pro Annual Renewal</td>
              <td className="px-4 py-2 text-foreground">$75.00</td>
              <td className="px-4 py-2 text-green-600">Paid</td>
            </tr>
            {/* More rows as needed */}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default SubscriptionSection;