// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Stationery Shop
        </Link>
        <nav>
          <Link to="/all-products" className="mr-4">
            Products
          </Link>
          <Link to="/cart" className="mr-4">
            Cart
          </Link>
          <Link to="/login" className="mr-4">
            Login
          </Link>
          <Link to="/register">Sign Up</Link>
        </nav>
      </div>
    </header>
  );
};
