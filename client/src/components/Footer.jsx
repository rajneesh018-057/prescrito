import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-16">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Branding */}
        <div className="space-y-4">
          <img src={assets.logo} alt="HealthCarePro" className="w-16 h-16" />
          <p className="text-sm">
            Your trusted platform for booking appointments with top doctors.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/doctors" className="hover:text-white">Doctors</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 123 Health St, London</li>
            <li>📞 +44 20 7946 0000</li>
            <li>✉️ contact@healthcarepro.uk</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#"><img src={assets.facebook_icon} alt="Facebook" className="w-6 h-6" /></a>
            <a href="#"><img src={assets.twitter_icon} alt="Twitter" className="w-6 h-6" /></a>
            <a href="#"><img src={assets.instagram_icon} alt="Instagram" className="w-6 h-6" /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} HealthCarePro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
