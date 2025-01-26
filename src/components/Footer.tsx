import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"; // Importing social media icons
import { Button } from "./ui/button";

export const Footer: React.FC = () => {
  return (
    <footer className="px-16 bg-gray-900 text-white p-6">
      <div className="container mx-auto space-y-6">
        {/* Logo and Social Media Section */}
        <div className="flex justify-between items-center border-b border-gray-700 py-6">
          <div className="text-2xl font-extrabold tracking-widest text-purple-400">
            Stationary Shop
          </div>
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex justify-between space-x-10 pt-6">
          <div>
            <h4 className="font-semibold text-lg text-gray-300 mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/all-products" className="hover:text-purple-500">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-purple-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-purple-500">
                  Contact
                </a>
              </li>
              <li>
                <a href="/dashboard/user" className="hover:text-purple-500">
                  Dashboard
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="font-semibold text-lg text-gray-300 mb-3">
              Newsletter
            </h4>
            <p className="text-gray-400 mb-3">
              Sign up for the latest updates and offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="p-3 rounded-l-lg text-gray-800 focus:outline-none w-60"
              />

              <Button
                variant="default"
                className="w-full py-6 btn-purple btn-purple:hover rounded-r-md bg-purple-600 focus:outline-none"
              >
                Subscribe
              </Button>

              {/* <button className="bg-purple-600 text-white p-2 rounded-r-md hover:bg-purple-800 focus:outline-none">
                Subscribe
              </button> */}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-400 pt-10">
          &copy; {new Date().getFullYear()} Stationary Shop. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};
