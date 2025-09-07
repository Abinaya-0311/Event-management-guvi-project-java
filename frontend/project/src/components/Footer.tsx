import React from 'react';
import { Calendar, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Calendar className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">EventHub</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Discover, register, and manage amazing events. Join our community and never miss out on exciting opportunities.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>contact@eventhub.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/events" className="text-gray-300 hover:text-blue-400 transition-colors">Browse Events</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a></li>
              <li><a href="/help" className="text-gray-300 hover:text-blue-400 transition-colors">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Technology</span></li>
              <li><span className="text-gray-300">Business</span></li>
              <li><span className="text-gray-300">Arts & Culture</span></li>
              <li><span className="text-gray-300">Sports</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 EventHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;