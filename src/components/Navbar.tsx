import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaCartPlus, FaUser, FaSignInAlt, FaSearch } from "react-icons/fa"; // Importing icons for Cart, User, Login, and Search

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-10">
      <div className="px-16 container mx-auto flex justify-between items-center p-6 py-4">
        {/* Left Section (Logo and Navigation Links) */}
        <div className="flex items-center space-x-16">
          <Link
            to="/"
            className="text-xl font-extrabold tracking-widest text-gray-200"
          >
            <div className="flex flex items-center mx-auto">
              <img
                src="/logo.png"
                alt="logo"
                className="rounded-sm h-14 w-14 mr-2"
              />
              <span>Stationary</span>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-6">
            <Link
              to="/all-products"
              className="text-lg text-gray-300 hover:text-white transition-all"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-lg text-gray-300 hover:text-white transition-all"
            >
              About
            </Link>
            <Link
              to="/dashboard/user"
              className="text-lg text-gray-300 hover:text-white transition-all"
            >
              Dashboard
            </Link>
          </nav>
        </div>

        {/* Center Section (Searchbar for larger screens) */}
        <div className="hidden md:flex flex-grow items-center justify-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800 text-white py-2 px-4 rounded-full pl-12 w-96 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Right Section (Login, Sign Up, Cart, and Icons) */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link
            to="/login"
            className="text-lg text-gray-300 hover:text-white transition-all flex items-center"
          >
            <FaSignInAlt className="mr-2" /> Login
          </Link>
          <Link
            to="/login"
            className="text-lg text-gray-300 hover:text-white transition-all flex items-center"
          >
            <FaUser className="mr-2" /> Sign Up
          </Link>

          <Button
            variant="outline"
            size="sm"
            className="text-gray-200 hover:text-gray-900 flex items-center"
          >
            <FaCartPlus />
          </Button>
        </div>

        {/* Mobile menu toggle (for smaller screens) */}
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMobileMenu}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu (for smaller screens) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4">
          <nav className="space-y-4">
            <Link to="/all-products" className="block text-lg">
              Products
            </Link>
            <Link to="/about" className="block text-lg">
              About
            </Link>
            <Link to="/dashboard/user" className="block text-lg">
              Dashboard
            </Link>
            <Link to="/login" className="block text-lg">
              Login
            </Link>
            <Link to="/login" className="block text-lg">
              Sign Up
            </Link>
            <Button
              variant="outline"
              size="sm"
              className="w-full flex items-center justify-center"
            >
              <FaCartPlus className="mr-2 text-gray-600 hover:text-white-600" />
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
