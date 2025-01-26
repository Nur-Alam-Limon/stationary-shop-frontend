import React from 'react';

export const FeaturesSection: React.FC = () => {
  const features = [
    { 
      title: 'Fast Shipping', 
      description: 'We offer quick and reliable delivery for all orders.',
      icon: '🚚' // Use any suitable icon here
    },
    { 
      title: 'Quality Products', 
      description: 'Only premium quality materials in our products.',
      icon: '🛍️' // Use any suitable icon here
    },
    { 
      title: 'Customer Support', 
      description: 'Round-the-clock support to assist you with any queries.',
      icon: '💬' // Use any suitable icon here
    },
  ];

  return (
    <section className="px-16 bg-gray-50 text-gray-800 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-12 text-gray-800">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
              <p className="text-lg text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
