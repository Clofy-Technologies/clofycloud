import React from 'react';

const SavedSolutionsSection: React.FC = () => {
  return (
    <main className="flex-1 overflow-auto p-8 bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6">My Saved Solutions</h1>

      <section className="bg-card rounded-lg shadow-md p-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-muted text-muted-foreground">
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Service</th>
              <th className="px-4 py-2 text-left">Summary</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border hover:bg-accent hover:text-accent-foreground">
              <td className="px-4 py-2 text-foreground">June 17, 2025</td>
              <td className="px-4 py-2 text-foreground">Cloud Migration</td>
              <td className="px-4 py-2 truncate text-foreground">AI-generated migration plan with rollback strategy...</td>
              <td className="px-4 py-2 space-x-2">
                <button className="px-3 py-1 bg-primary text-primary-foreground rounded-md hover:bg-primary-foreground hover:text-primary transition-colors duration-200">View</button>
                <button className="px-3 py-1 bg-destructive text-destructive-foreground rounded-md hover:bg-destructive-foreground hover:text-destructive transition-colors duration-200">Delete</button>
              </td>
            </tr>
            <tr className="border-t border-border hover:bg-accent hover:text-accent-foreground">
              <td className="px-4 py-2 text-foreground">June 10, 2025</td>
              <td className="px-4 py-2 text-foreground">DevOps Automation</td>
              <td className="px-4 py-2 truncate text-foreground">CI/CD pipeline template for containerized apps...</td>
              <td className="px-4 py-2 space-x-2">
                <button className="px-3 py-1 bg-primary text-primary-foreground rounded-md hover:bg-primary-foreground hover:text-primary transition-colors duration-200">View</button>
                <button className="px-3 py-1 bg-destructive text-destructive-foreground rounded-md hover:bg-destructive-foreground hover:text-destructive transition-colors duration-200">Delete</button>
              </td>
            </tr>
            {/* More rows... */}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="mt-6 flex justify-center">
          <nav className="inline-flex space-x-2 rounded-md shadow-sm border border-input p-1 bg-background">
            <a href="#" className="px-3 py-1 bg-card text-card-foreground border border-border rounded-md hover:bg-accent hover:text-accent-foreground transition-colors duration-200">1</a>
            <a href="#" className="px-3 py-1 bg-primary text-primary-foreground rounded-md hover:bg-primary-foreground hover:text-primary transition-colors duration-200">2</a>
            <a href="#" className="px-3 py-1 bg-card text-card-foreground border border-border rounded-md hover:bg-accent hover:text-accent-foreground transition-colors duration-200">3</a>
            <span className="px-3 py-1 text-muted-foreground">...</span>
            <a href="#" className="px-3 py-1 bg-card text-card-foreground border border-border rounded-md hover:bg-accent hover:text-accent-foreground transition-colors duration-200">Next →</a>
          </nav>
        </div>
      </section>
    </main>
  );
};

export default SavedSolutionsSection;