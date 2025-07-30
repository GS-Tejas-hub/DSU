import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import About from './components/About';
import FacultyLabs from './components/FacultyLabs';
import Calendar from './components/Calendar';
import Footer from './components/Footer';
import NewsletterModal from './components/NewsletterModal';

function App() {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNewsletterClick={() => setIsNewsletterOpen(true)} />
      <main>
        <Hero />
        <Programs />
        <About />
        <FacultyLabs />
        <Calendar />
      </main>
      <Footer />
      <NewsletterModal 
        isOpen={isNewsletterOpen} 
        onClose={() => setIsNewsletterOpen(false)} 
      />
    </div>
  );
}

export default App;