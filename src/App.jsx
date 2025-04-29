import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Projects />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;