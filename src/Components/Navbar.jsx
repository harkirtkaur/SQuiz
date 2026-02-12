import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-800">My App</h1>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <a href="#" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
