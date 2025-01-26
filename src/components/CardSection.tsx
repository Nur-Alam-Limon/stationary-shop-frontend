import React from 'react';
import { Button } from './ui/button';

export const CardSection: React.FC = () => {
  const cards = [
    {
      title: 'Fast Delivery',
      description:
        'We ensure that all your orders are delivered quickly and securely to your doorstep.',
      buttonText: 'Learn More',
      imageUrl: 'stationery1.png', // replace with actual image URL
    },
    {
      title: 'Premium Quality',
      description:
        'Our products are made with high-quality materials to provide durability and satisfaction.',
      buttonText: 'Shop Now',
      imageUrl: 'stationery2.png', // replace with actual image URL
    },
  ];

  return (
    <section className="px-16 py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-800 p-8 rounded-lg shadow-lg flex items-center justify-end"
            >
              {/* Left side (Text content) */}
              <div className="flex-1 text-left">
                <h3 className="text-3xl font-semibold text-white mb-4">{card.title}</h3>
                <p className="text-lg text-white mb-6">{card.description}</p>
                <Button variant="outline" className="bg-white py-6 btn-outline-purple btn-outline-purple:hover rounded-lg hover:bg-gray-800">
                {card.buttonText}
              </Button>
                {/* <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition-all">
                  {card.buttonText}
                </button> */}
              </div>

              {/* Right side (Image) */}
              <div className="flex-1 flex justify-end pr-8">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-auto h-40 rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
