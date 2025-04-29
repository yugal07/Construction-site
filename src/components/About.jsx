import React from 'react';

const About = () => {
  // Company stats
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "200+", label: "Projects Completed" },
    { value: "50+", label: "Team Members" },
    { value: "98%", label: "Client Satisfaction" }
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="https://via.placeholder.com/800x600/999999/FFFFFF?text=Company+Image" 
                alt="About Paras Construction" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 rounded-lg p-6 shadow-lg hidden md:block">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <p className="text-2xl font-bold text-blue-900">{stat.value}</p>
                      <p className="text-sm text-blue-900">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Paras Construction</h2>
            
            <p className="text-gray-600 mb-4">
              Paras Construction is a premier construction company based in Bhopal, India. Founded by Rahul Yadav, we have been delivering exceptional construction services for over 15 years, establishing ourselves as a trusted name in the industry.
            </p>
            
            <p className="text-gray-600 mb-6">
              Our team of highly skilled professionals is committed to excellence in every project we undertake. From residential homes to commercial complexes, we bring innovation, quality craftsmanship, and attention to detail to all our work.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To deliver high-quality construction services that exceed client expectations while maintaining the highest standards of safety, integrity, and professionalism.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted and respected construction company in Central India, known for our quality, innovation, and commitment to customer satisfaction.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row md:flex-wrap gap-4">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Quality Craftsmanship</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">On-Time Delivery</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Cost-Effective Solutions</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Sustainable Practices</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 lg:hidden bg-white p-6 rounded-lg shadow-lg">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4">
              <p className="text-2xl font-bold text-blue-900">{stat.value}</p>
              <p className="text-sm text-blue-900">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;