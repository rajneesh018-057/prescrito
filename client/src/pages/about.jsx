import React from 'react';
import {assets} from '../assets/assets'; // Adjust the path as needed

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
        <div className="w-full md:w-1/2">
          <img 
            src={assets.about_image}
            
            alt="Our Healthcare Team" 
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">About Our Healthcare Platform</h1>
          <p className="text-lg text-gray-600 mb-6">
            We're transforming healthcare by connecting patients with top medical professionals through innovative technology.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition">
              Meet Our Team
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md font-medium hover:bg-blue-50 transition">
              Our Services
            </button>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="text-blue-600 text-4xl mb-4">🌟</div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To make quality healthcare accessible to everyone by eliminating barriers through technology. We're committed to creating a seamless connection between patients and healthcare providers.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="text-blue-600 text-4xl mb-4">👁️</div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To be the most trusted digital healthcare ecosystem, setting new standards for patient experience and medical service delivery across the globe.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="flex flex-col md:flex-row gap-12 mb-16 bg-blue-50 p-8 rounded-lg">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Journey</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2023 by a team of doctors and technologists, we recognized the growing need for a more efficient healthcare appointment system.
          </p>
          <p className="text-gray-700">
            Today, we serve thousands of patients monthly with a network of hundreds of verified healthcare professionals across multiple specialties.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <div className="bg-white p-6 rounded-lg shadow-inner">
            <h3 className="font-bold text-lg mb-3 text-blue-800">Key Milestones</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3">✓</span>
                <span>2023: Platform launched with 50 doctors</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3">✓</span>
                <span>2024: Expanded to 5 new cities</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3">✓</span>
                <span>2025: Reached 10,000+ patients served</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Patients Trust Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '🩺',
              title: 'Expert Doctors',
              description: 'All practitioners are verified with proper credentials and extensive experience.'
            },
            {
              icon: '⏱️',
              title: 'Quick Access',
              description: 'Same-day appointments available with minimal wait times.'
            },
            {
              icon: '💰',
              title: 'Transparent Pricing',
              description: 'No hidden fees with clear pricing for all services.'
            },
            {
              icon: '📱',
              title: 'Easy Booking',
              description: 'Intuitive platform that makes scheduling effortless.'
            },
            {
              icon: '🔒',
              title: 'Data Security',
              description: 'Your health information is protected with advanced encryption.'
            },
            {
              icon: '❤️',
              title: 'Patient-Centered',
              description: 'Care designed around your needs and convenience.'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Experience Better Healthcare?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied patients who found the right care through our platform.
        </p>
        <button className="bg-white text-blue-800 px-8 py-3 rounded-md font-bold text-lg hover:bg-blue-100 transition shadow-lg">
          Book Your First Appointment
        </button>
      </div>
    </div>
  );
};

export default About;