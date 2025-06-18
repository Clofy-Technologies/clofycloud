import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is your refund policy?",
    answer: "Refunds are only available for yearly plans. Please contact us within 30 days of purchase to request a refund."
  },
  {
    question: "How long are my credits valid?",
    answer: "All purchased credits remain valid for 12 months from the date of purchase. You can always check your exact expiry date in your account dashboard, and we’ll send reminders as credits approach expiration."
  },
  {
    question: "Can I use the generated solutions commercially?",
    answer: "Absolutely. All solution plans, architecture diagrams, and recommendations you get from Clofy Cloud are yours to use in any commercial context."
  },
  {
    question: "What LLM model powers Clofy Cloud?",
    answer: "We leverage Azure OpenAI’s GPT-4 Turbo model to deliver fast, accurate, and context-aware cloud consulting."
  },
  {
    question: "Are there discounts for non-profits or educational institutions?",
    answer: "Yes—we offer special pricing for accredited non-profits and educational organizations. Please contact us for details and eligibility."
  },
  {
    question: "How can I contact support?",
    answer: "You can reach our support team via email at support@clofy.cloud or by using the live chat widget once you’re logged into the dashboard."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="border border-gray-200 rounded-xl p-4"
            >
              <button
                className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-900 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
