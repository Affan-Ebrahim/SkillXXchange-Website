import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            SkillXXchange
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${
                isActive('/') ? 'text-gray-900 font-semibold' : 'text-gray-600'
              } hover:text-gray-900 transition`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${
                isActive('/about') ? 'text-gray-900 font-semibold' : 'text-gray-600'
              } hover:text-gray-900 transition`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`${
                isActive('/services') ? 'text-gray-900 font-semibold' : 'text-gray-600'
              } hover:text-gray-900 transition`}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive('/contact') ? 'text-gray-900 font-semibold' : 'text-gray-600'
              } hover:text-gray-900 transition`}
            >
              Contact
            </Link>
            <Link
              to="/share-skill"
              className="bg-[#FFD700] hover:bg-[#FFC700] text-gray-900 px-6 py-2 rounded-md font-medium transition"
            >
              Share Skill
            </Link>
            <Link
              to="/login"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-[#00BFA5] hover:bg-[#00A890] text-white px-6 py-2 rounded-md font-medium transition"
            >
              Sign up
            </Link>
          </div>

          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              to="/"
              className="block py-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className="block py-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/share-skill"
              className="block py-2 bg-[#FFD700] hover:bg-[#FFC700] text-gray-900 text-center rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Share Skill
            </Link>
            <Link
              to="/login"
              className="block py-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block py-2 bg-[#00BFA5] hover:bg-[#00A890] text-white text-center rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
