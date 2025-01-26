import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-purple-700 mb-4">About Us</h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            At <span className="font-semibold">Stationery Haven</span>, we believe in the power of creativity and organization. We provide high-quality stationery products to inspire your ideas and bring order to your workspace.
          </p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="https://img.freepik.com/free-photo/closed-notebook-office-supplies_23-2147689745.jpg?uid=R8647428&ga=GA1.1.805615852.1737822151&semt=ais_hybrid"
              alt="Stationery Items"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-semibold text-purple-600 mb-4">Who We Are</h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              We are passionate about helping students, professionals, and artists find the perfect tools for their tasks. From elegant notebooks to stylish desk organizers, every item we offer is carefully selected to meet your needs.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Whether you're jotting down your next big idea, organizing your office, or unleashing your creativity, our stationery products are here to support you every step of the way.
            </p>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mt-16">
          <h2 className="text-center text-3xl font-semibold text-purple-600 mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Creativity',
                description: 'We encourage creativity with products that spark inspiration.',
                icon: '🎨',
              },
              {
                title: 'Quality',
                description: 'Our stationery is crafted with care, ensuring durability and elegance.',
                icon: '📝',
              },
              {
                title: 'Organization',
                description: 'We help you stay organized with practical and stylish solutions.',
                icon: '📂',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 text-center border-t-4 border-purple-500"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-center text-3xl font-semibold text-purple-600 mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Emma Carter',
                role: 'Founder & CEO',
                image: 'https://img.freepik.com/free-photo/portrait-young-girl-gray-t-shirt-purple-wall_197531-23362.jpg?uid=R8647428&ga=GA1.1.805615852.1737822151&semt=ais_hybrid',
              },
              {
                name: 'James Brooks',
                role: 'Product Designer',
                image: 'https://img.freepik.com/free-photo/guy-stylish-hat-beige-jacket-smiles-shows-his-finger-camera_197531-23258.jpg?uid=R8647428&ga=GA1.1.805615852.1737822151&semt=ais_hybrid',
              },
              {
                name: 'Soph Green',
                role: 'Marketing Specialist',
                image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?uid=R8647428&ga=GA1.1.805615852.1737822151&semt=ais_hybrid',
              },
            ].map((teamMember, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
                <img
                  src={teamMember.image}
                  alt={teamMember.name}
                  className="rounded-full w-32 h-32 mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-800">{teamMember.name}</h3>
                <p className="text-purple-600">{teamMember.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Let’s Make Your Ideas Shine!</h2>
          <p className="text-gray-700 text-lg mb-6">
            Discover the perfect stationery to bring your creativity and organization to life. Visit us today!
          </p>
          <button className="bg-white border-2 border-purple-600 text-purple-600 font-bold px-6 py-3 rounded-full hover:bg-purple-600 hover:text-white transition-all">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

  