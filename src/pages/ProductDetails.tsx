import React from 'react';
import { useParams } from 'react-router-dom';

// Mock Data (Replace with your actual product fetching logic)
const products = [
  {
    name: 'Notebook',
    price: '10.00',
    imageUrl:
      'https://img.freepik.com/free-photo/lovely-flowers-concept-with-modern-notebook_23-2148007002.jpg?uid=R8647428&ga=GA1.1.805615852.1737822151&semt=ais_hybrid',
    description: 'A premium notebook for all your note-taking needs.',
  },
  {
    name: 'Pen Set',
    price: '15.00',
    imageUrl:
      'https://img.freepik.com/free-photo/3d-rendering-pen-ai-generated_23-2150695397.jpg?uid=R8647428&ga=GA1.1.805615852.1737822151&semt=ais_hybrid',
    description: 'A set of high-quality pens for smooth writing.',
  },
  {
    name: 'Desk Organizer',
    price: '25.00',
    imageUrl:
      'https://img.freepik.com/free-photo/plant-near-various-stationery_23-2147772321.jpg?uid=R8647428&ga=GA1.1.805615852.1737822151&semt=ais_hybrid',
    description: 'Keep your workspace tidy with this stylish desk organizer.',
  },
  {
    name: 'Stapler',
    price: '5.00',
    imageUrl:
      'https://img.freepik.com/free-photo/red-set-office-supplies_53876-75088.jpg?uid=R8647428&ga=GA1.1.805615852.1737822151&semt=ais_hybrid',
    description: 'A reliable stapler for all your office needs.',
  },
];

export const ProductDetails: React.FC = () => {
  const { productName } = useParams<{ productName: string }>(); // Extract product name from the URL

  // Normalize names: Lowercase and replace spaces with hyphens
  const normalizedProductName = productName?.toLowerCase().replace(/-/g, ' ');
  const product = products.find(
    (p) => p.name.toLowerCase() === normalizedProductName
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-red-500">
          Product not found!
        </h1>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-8">
        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="flex justify-center">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
          </div>

          {/* Product Information */}
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {product.name}
            </h1>
            <p className="text-purple-600 text-2xl font-semibold mb-4">
              ${product.price}
            </p>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Call to Action */}
            <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-700 transition-all">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
