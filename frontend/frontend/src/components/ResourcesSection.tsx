import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is CLOFY?",
    answer: "CLOFY is a cloud solution platform that helps you manage and optimize your cloud resources efficiently."
  },
  {
    question: "How do I sign up?",
    answer: "Click on the Sign Up tab at the top of the login page and fill in your details to create a new account."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we use industry-standard security practices to ensure your data is safe and protected."
  },
  {
    question: "How can I contact CLOFY?",
    answer: "You can send an email to support@clofy.tech"
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
