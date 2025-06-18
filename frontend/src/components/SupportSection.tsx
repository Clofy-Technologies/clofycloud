import React from 'react';

const SupportSection: React.FC = () => {
  return (
    <main className="flex-1 overflow-auto p-8 bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6">Support</h1>
      <section className="bg-card rounded-lg shadow-md p-6 max-w-lg mx-auto space-y-6">
        <p className="text-foreground">If you need help or have any questions, please reach out to our support team:</p>
        <div className="bg-muted p-4 rounded-md">
          <h2 className="font-medium text-muted-foreground">Email Us</h2>
          <p><a href="mailto:support@clofy.cloud" className="text-primary hover:underline">support@clofy.cloud</a></p>
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-foreground">Your Email</label>
            <input id="email" type="email" className="w-full border border-input rounded-md px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-1 font-medium text-foreground">Subject</label>
            <input id="subject" type="text" className="w-full border border-input rounded-md px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Brief summary of your issue" />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium text-foreground">Message</label>
            <textarea id="message" className="w-full border border-input rounded-md px-3 py-2 h-32 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Describe your issue or question"></textarea>
          </div>
          <button type="submit" className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-foreground hover:text-primary transition-colors duration-200">Send Message</button>
        </form>
      </section>
    </main>
  );
};

export default SupportSection;