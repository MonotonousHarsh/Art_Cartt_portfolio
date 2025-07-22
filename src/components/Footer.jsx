import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Heart } from 'lucide-react';

const Footer = () => {
  const inspirationalQuotes = [
    "Art is not what you see, but what you make others see.",
    "Colors are the smiles of nature.",
    "Every artist was first an amateur.",
    "Art washes away from the soul the dust of everyday life.",
    "The earth without art is just 'eh'.",
    "Creativity takes courage.",
    "Art enables us to find ourselves and lose ourselves at the same time.",
    "Nature is painting for us, day after day, pictures of infinite beauty.",
  ];

  const randomQuote = inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)];

  return (
    <footer className="relative py-16 px-4">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo and Brand */}
          <motion.div
            className="flex items-center justify-center space-x-3 mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <motion.div
              className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl"
              whileHover={{ rotate: 15 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Palette className="h-8 w-8 text-white" />
            </motion.div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-playfair">
              ArtCartt
            </h3>
          </motion.div>

          {/* Inspirational Quote */}
          <motion.div
            className="max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <blockquote className="text-xl md:text-2xl text-white/90 font-light italic mb-4 leading-relaxed">
              "{randomQuote}"
            </blockquote>
            <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto" />
          </motion.div>

          {/* Nature & Art Thoughts */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h4 className="text-lg font-semibold text-purple-300 mb-3 font-playfair">
                Nature's Palette
              </h4>
              <p className="text-white/80 text-sm leading-relaxed">
                The sunset paints the sky with colors that no artist could ever fully capture, 
                yet we try, inspired by nature's endless creativity.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h4 className="text-lg font-semibold text-pink-300 mb-3 font-playfair">
                Creative Flow
              </h4>
              <p className="text-white/80 text-sm leading-relaxed">
                Like rivers that carve through mountains, art flows through our souls, 
                shaping who we are and how we see the world around us.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 md:col-span-2 lg:col-span-1"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h4 className="text-lg font-semibold text-teal-300 mb-3 font-playfair">
                Timeless Beauty
              </h4>
              <p className="text-white/80 text-sm leading-relaxed">
                Art is the bridge between what is and what could be, 
                transforming the ordinary into the extraordinary through color and vision.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="border-t border-white/20 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2024 ArtCartt. All rights reserved.
            </div>
            
            <motion.div
              className="flex items-center space-x-2 text-white/60 text-sm"
              whileHover={{ scale: 1.05 }}
            >
              <span>Made with</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart className="h-4 w-4 text-red-400 fill-current" />
              </motion.div>
              <span>for art lovers everywhere</span>
            </motion.div>

            <div className="flex space-x-6 text-white/60 text-sm">
              <motion.a 
                href="#" 
                className="hover:text-purple-400 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-purple-400 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;