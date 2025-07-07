import React from 'react';
import { assets } from '../assets/assets';
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      {/* Main Content */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center flex-1 px-6 py-12 gap-10 max-w-7xl mx-auto">
        {/* Form Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            We'd love to hear from you. Please fill out the form below and our team will get back to you shortly.
          </p>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={assets.contact_image}
            alt="Contact Us"
            className="w-full h-auto rounded-2xl shadow-xl"
          />
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default ContactUs;
