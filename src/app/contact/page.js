'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "I specialize in product design, web design, and UX/UI solutions. I can help you with everything from initial concept development to the final implementation of your digital products."
    },
    {
      question: "How do we start a project together?",
      answer: "Simply reach out through the contact form or email me directly. We&apos;ll schedule an initial consultation to discuss your project needs and goals."
    },
    {
      question: "What is your design process?",
      answer: "My design process includes research, ideation, prototyping, testing, and iteration. I work closely with clients throughout each phase to ensure the final product meets their expectations."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on scope and complexity. A typical website project takes 4-8 weeks, while larger applications may take 3-6 months."
    },
    {
      question: "Do you offer maintenance and support after the project is completed?",
      answer: "Yes, I offer ongoing maintenance and support packages to ensure your product continues to perform optimally after launch."
    },
    {
      question: "Can you work with my existing brand guidelines?",
      answer: "Absolutely! I can work within your existing brand guidelines or help you develop new ones if needed."
    },
    {
      question: "What are your rates for a project?",
      answer: "Rates vary based on project scope and requirements. Contact me for a detailed quote tailored to your specific needs."
    },
    {
      question: "Do you work with clients remotely?",
      answer: "Yes, I work with clients worldwide through video calls, email, and project management tools."
    }
  ];

  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <div className="max-w-[750px] mx-auto px-6 py-12 md:py-20">
      {/* Back Link */}
      <div className="mb-12">
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          <svg className="w-4 h-4 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          Back to homepage
        </Link>
      </div>

      {/* Contact Form Section */}
      <div className="mb-20">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Let&apos;s Connect</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Ready to bring your ideas to life? Let&apos;s collaborate! Whether you need product design, a website, or UX/UI solutions, I&apos;m here to help. Reach out to discuss your project!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                required
                className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white text-gray-900 dark:text-white placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                required
                className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white text-gray-900 dark:text-white placeholder-gray-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@company.com"
              required
              className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white text-gray-900 dark:text-white placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1(555) 000-0000"
              required
              className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white text-gray-900 dark:text-white placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Leave me a message ..."
              rows={6}
              className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white text-gray-900 dark:text-white placeholder-gray-400 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all hover:scale-105 active:scale-95"
          >
            Send message
          </button>
        </form>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 dark:border-gray-800 mb-20"></div>

      {/* FAQ Section */}
      <div className="mb-20">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Questions? Answer</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Find solutions to common queries here.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded">
                  <svg
                    className="w-4 h-4 text-gray-900 dark:text-white transition-transform"
                    style={{ transform: openFaqIndex === index ? 'rotate(0deg)' : 'rotate(0deg)' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {openFaqIndex === index ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    )}
                  </svg>
                </div>
              </button>
              {openFaqIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
