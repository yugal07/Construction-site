import React, { useState } from 'react';

const ProjectCard = ({ image, title, category, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative rounded-lg overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
      />
      <div className={`absolute inset-0 bg-blue-900 bg-opacity-80 flex flex-col justify-center p-6 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <span className="text-yellow-400 text-sm font-medium mb-2">{category}</span>
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-200 text-sm">{description}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      image: "https://via.placeholder.com/600x400/999999/FFFFFF?text=Commercial+Building",
      title: "Sunrise Office Complex",
      category: "Commercial",
      description: "A modern 5-story office building with sustainable design features in the heart of Bhopal."
    },
    {
      image: "https://via.placeholder.com/600x400/999999/FFFFFF?text=Luxury+Home",
      title: "Lakeside Villa",
      category: "Residential",
      description: "A luxurious 4-bedroom villa with panoramic views and premium finishes."
    },
    {
      image: "https://via.placeholder.com/600x400/999999/FFFFFF?text=Hospital+Building",
      title: "City Medical Center",
      category: "Healthcare",
      description: "State-of-the-art medical facility designed for optimal patient care and staff efficiency."
    },
    {
      image: "https://via.placeholder.com/600x400/999999/FFFFFF?text=Shopping+Mall",
      title: "Greenway Shopping Mall",
      category: "Retail",
      description: "A multi-level shopping destination featuring over 100 retail spaces and modern amenities."
    },
    {
      image: "https://via.placeholder.com/600x400/999999/FFFFFF?text=Apartment+Complex",
      title: "Urban Heights Apartments",
      category: "Residential",
      description: "Premium apartment complex with 120 units and extensive community facilities."
    },
    {
      image: "https://via.placeholder.com/600x400/999999/FFFFFF?text=Hotel+Building",
      title: "Royal Grand Hotel",
      category: "Hospitality",
      description: "Luxury hotel featuring 250 rooms, conference facilities, and rooftop restaurants."
    }
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects showcasing our expertise and commitment to quality construction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              image={project.image}
              title={project.title}
              category={project.category}
              description={project.description}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-md transition duration-300"
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;