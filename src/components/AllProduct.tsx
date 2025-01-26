import React, { useState } from 'react';
import { Button } from './ui/button';

const products = [
  {
    name: 'Notebook',
    price: '10.00',
    imageUrl:
      'https://img.freepik.com/free-photo/lovely-flowers-concept-with-modern-notebook_23-2148007002.jpg?uid=R8647428&ga=GA1.1.805615852.1737822151&semt=ais_hybrid',
    description: 'A premium notebook for all your note-taking needs.',
    color: 'black'
  },
  {
    name: 'Pen Set',
    price: '15.00',
    imageUrl:
      'https://img.freepik.com/free-photo/3d-rendering-pen-ai-generated_23-2150695397.jpg?uid=R8647428&ga=GA1.1.805615852.1737822151&semt=ais_hybrid',
    description: 'A set of high-quality pens for smooth writing.',
    color: 'purple'
  },
  {
    name: 'Desk Organizer',
    price: '25.00',
    imageUrl:
      'https://img.freepik.com/free-photo/plant-near-various-stationery_23-2147772321.jpg?uid=R8647428&ga=GA1.1.805615852.1737822151&semt=ais_hybrid',
    description: 'Keep your workspace tidy with this stylish desk organizer.',
    color: 'purple'
  },
  {
    name: 'Stapler',
    price: '5.00',
    imageUrl:
      'https://img.freepik.com/free-photo/red-set-office-supplies_53876-75088.jpg?uid=R8647428&ga=GA1.1.805615852.1737822151&semt=ais_hybrid',
    description: 'A reliable stapler for all your office needs.',
    color: 'purple'
  },
];

const AllProductsPage: React.FC = () => {
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const filteredProducts = products.filter((product) => {
    const isPriceMatch = selectedPrice ? parseFloat(product.price) <= parseFloat(selectedPrice) : true;
    const isColorMatch = selectedColor ? product.color === selectedColor : true;
    return isPriceMatch && isColorMatch;
  });


  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-1/4 p-10 bg-white shadow-md">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Price Range</label>
          <select
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-purple-500"
          >
            <option value="">All</option>
            <option value="10">Up to $10</option>
            <option value="20">Up to $20</option>
            <option value="30">Up to $30</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Color</label>
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-purple-500"
          >
            <option value="">All</option>
            <option value="purple">Purple</option>
            <option value="blue">Blue</option>
            <option value="black">Black</option>
          </select>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-10 pb-20">
        <h1 className="text-2xl font-bold mb-6">All Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-purple-600 font-bold text-lg mb-4">${product.price}</p>
              <Button variant="outline" className="w-full py-6 btn-outline-purple btn-outline-purple:hover rounded-lg">
                Add to Cart
              </Button>
             
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AllProductsPage;
