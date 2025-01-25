// src/components/Footer.tsx
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} Stationery Shop. All rights reserved.
      </div>
    </footer>
  );
};
