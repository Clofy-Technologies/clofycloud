import React from 'react';

const UpgradeSection: React.FC = () => {
  return (
    <main className="flex-1 overflow-auto p-8 bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6">Plans & Pricing</h1>
      <section className="bg-card rounded-lg shadow-md p-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-muted text-muted-foreground">
              <th className="px-4 py-2 text-left">Plan</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Credits/Month</th>
              <th className="px-4 py-2 text-left">Key Features</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border hover:bg-accent hover:text-accent-foreground">
              <td className="px-4 py-2 text-foreground">Free</td>
              <td className="px-4 py-2 text-foreground">$0</td>
              <td className="px-4 py-2 text-foreground">10</td>
              <td className="px-4 py-2 text-foreground">Basic services, AI recommendations</td>
              <td className="px-4 py-2">
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-foreground hover:text-primary transition-colors duration-200">Start Free</button>
              </td>
            </tr>
            <tr className="border-t border-border hover:bg-accent hover:text-accent-foreground">
              <td className="px-4 py-2 text-foreground">Startup</td>
              <td className="px-4 py-2 text-foreground">$29/mo</td>
              <td className="px-4 py-2 text-foreground">100</td>
              <td className="px-4 py-2 text-foreground">Rollovers, email support, analytics</td>
              <td className="px-4 py-2">
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-foreground hover:text-primary transition-colors duration-200">Subscribe</button>
              </td>
            </tr>
            <tr className="border-t border-border hover:bg-accent hover:text-accent-foreground">
              <td className="px-4 py-2 text-foreground">SME</td>
              <td className="px-4 py-2 text-foreground">$59/mo</td>
              <td className="px-4 py-2 text-foreground">300</td>
              <td className="px-4 py-2 text-foreground">Priority support, team accounts</td>
              <td className="px-4 py-2">
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-foreground hover:text-primary transition-colors duration-200">Subscribe</button>
              </td>
            </tr>
            <tr className="border-t border-border hover:bg-accent hover:text-accent-foreground">
              <td className="px-4 py-2 text-foreground">Enterprise</td>
              <td className="px-4 py-2 text-foreground">Custom</td>
              <td className="px-4 py-2 text-foreground">500+</td>
              <td className="px-4 py-2 text-foreground">Dedicated consultant, SLAs</td>
              <td className="px-4 py-2">
                <button className="px-4 py-2 bg-muted text-muted-foreground rounded-md hover:bg-accent hover:text-accent-foreground transition-colors duration-200">Contact Sales</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default UpgradeSection;