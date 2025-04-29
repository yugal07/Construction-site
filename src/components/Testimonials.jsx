import React, { useState } from 'react';

const TestimonialCard = ({ content, author, position, company }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <svg className="w-8 h-8 text-yellow-500 mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0A7 7 0 005.636 4.94L8 7.304A1 1 0 116.586 8.72L2.293 4.426a1 1 0 010-1.414L6.586.305A1 1 0 018 1.72L6.625 2.655zM14 9a1 1 0 00-1-1h-2a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1V9z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M11.625 2.655A9 9 0 0124 11a1 1 0 11-2 0A7 7 0 0010.636 4.94L13 7.304A1 1 0 1111.586 8.72L7.293 4.426a1 1 0 010-1.414L11.586.305A1 1 0 0113 1.72l-1.375.935z" clipRule="evenodd" />
      </svg>
      <p className="text-gray-700 mb-4">{content}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
        <div>
          <h4 className="font-bold">{author}</h4>
          <p className="text-sm text-gray-600">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      content: "Paras Construction exceeded our expectations. The team's attention to detail and commitment to quality delivered a commercial building that perfectly meets our needs.",
      author: "Sunita Sharma",
      position: "CEO",
      company: "Sharma Enterprises"
    },
    {
      content: "Working with Rahul and his team was a pleasure. They completed our home renovation on time and within budget, and the results are stunning.",
      author: "Rajesh Kumar",
      position: "Homeowner",
      company: ""
    },
    {
      content: "As a property developer, I've worked with many construction companies, but Paras Construction stands out for their professionalism and quality workmanship.",
      author: "Amit Patel",
      position: "Director",
      company: "Bhopal Real Estate Group"
    },
    {
      content: "The team at Paras Construction transformed our outdated office into a modern workspace. Their innovative solutions maximized our space while maintaining a stylish aesthetic.",
      author: "Priya Mehta",
      position: "Operations Manager",
      company: "Tech Solutions India"
    },
    {
      content: "We hired Paras Construction for our hotel renovation project, and they delivered exceptional results. Their expertise in hospitality construction is evident in every detail.",
      author: "Vikram Singh",
      position: "General Manager",
      company: "Royal Palace Hotel"
    },
    {
      content: "From the initial planning to the final touches, Paras Construction demonstrated expertise and dedication to our healthcare facility project.",
      author: "Dr. Meena Verma",
      position: "Medical Director",
      company: "Bhopal Medical Center"
    }
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  
  const displayedTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what our clients have to say about working with Paras Construction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedTestimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
            />
          ))}
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full mx-1 ${
                  currentPage === index ? 'bg-blue-900' : 'bg-gray-300'
                }`}
                aria-label={`Page ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;