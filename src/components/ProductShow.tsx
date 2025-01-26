import React from 'react';

// Define props interface
interface ProductShowcaseProps {
  title: string;
  description?: string;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ title, description }) => {
  const products = [
    { 
      name: 'Notebook', 
      price: '10.00', 
      imageUrl: 'https://img.freepik.com/free-photo/lovely-flowers-concept-with-modern-notebook_23-2148007002.jpg?uid=R8647428&ga=GA1.1.805615852.1737822151&semt=ais_hybrid', 
      description: 'A premium notebook for all your note-taking needs.'
    },
    { 
      name: 'Pen Set', 
      price: '15.00', 
      imageUrl: 'https://img.freepik.com/free-photo/3d-rendering-pen-ai-generated_23-2150695397.jpg?uid=R8647428&ga=GA1.1.805615852.1737822151&semt=ais_hybrid', 
      description: 'A set of high-quality pens for smooth writing.'
    },
    { 
      name: 'Desk Organizer', 
      price: '25.00', 
      imageUrl: 'https://img.freepik.com/free-photo/plant-near-various-stationery_23-2147772321.jpg?uid=R8647428&ga=GA1.1.805615852.1737822151&semt=ais_hybrid', 
      description: 'Keep your workspace tidy with this stylish desk organizer.'
    },
    { 
      name: 'Stapler', 
      price: '5.00', 
      imageUrl: 'https://img.freepik.com/free-photo/red-set-office-supplies_53876-75088.jpg?uid=R8647428&ga=GA1.1.805615852.1737822151&semt=ais_hybrid', 
      description: 'A reliable stapler for all your office needs.'
    },
  ];

  return (
    <section className="py-20 bg-gray-100 px-16">
      <div className="container mx-auto text-center">
        {title && <h2 className="text-4xl font-semibold mb-8 text-gray-800">{title}</h2>}
        {description && <p className="text-lg mb-12 text-gray-600">{description}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
              <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover rounded-lg mb-4"/>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
              <p className="text-gray-500 mb-4">{product.description}</p>
              <p className="text-lg font-semibold text-gray-700">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
