import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import Gallery from './sections/Gallery';
import About from './sections/About';
import Contact from './sections/Contact';
import Shows from './sections/Shows';
import Footer from './components/Footer';
import SmoothScrolling from './components/SmoothScrolling';
import Chatbot from './components/Chatbot';

function App() {
  useEffect(() => {
    // GSAP ScrollTrigger setup will be handled in individual components
  }, []);

  return (
    <div className="relative">
      <SmoothScrolling>
        {/* Animated background */}
        <div className="fixed inset-0 z-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500"
            animate={{
              background: [
                'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
                'linear-gradient(45deg, #f093fb 0%, #f5576c 100%)',
                'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)',
                'linear-gradient(45deg, #43e97b 0%, #38f9d7 100%)',
                'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
              ]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-20" />
        </div>

        <div className="relative z-10">
          <Navbar />
          <main>
            <Home />
            <About />
            <Gallery />
            <Shows />
            <Contact />
          </main>
          <Footer />
          <Chatbot />
        </div>
      </SmoothScrolling>
    </div>
  );
}

export default App;