import React from 'react';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-red-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8" />
              <span className="text-xl font-bold">MendjeAI</span>
            </Link>
          </div>
          
          <div className="flex space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-500">
              Shtëpi
            </Link>
            <Link to="/chat" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-500">
              Chat
            </Link>
            <Link to="/pricing" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-500">
              Çmimet
            </Link>
            <Link to="/account" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red-500">
              Llogaria
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;