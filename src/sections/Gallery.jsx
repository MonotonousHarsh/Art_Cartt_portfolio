import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const galleryRef = useRef(null);

  const artworks = [
    {
      id: 1,
      title: 'Sunset Symphony',
      image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-15',
      description: 'A harmonious blend of warm colors capturing the essence of a perfect sunset',
      colors: 'Orange, Red, Yellow, Purple',
    },
    {
      id: 2,
      title: 'Ocean Dreams',
      image: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-02-03',
      description: 'Deep blues and teals representing the mysterious depths of the ocean',
      colors: 'Blue, Teal, White, Navy',
    },
    {
      id: 3,
      title: 'Forest Whispers',
      image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-02-20',
      description: 'Earthy greens and browns capturing the serenity of ancient forests',
      colors: 'Green, Brown, Gold, Emerald',
    },
    {
      id: 4,
      title: 'Urban Rhythm',
      image: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-03-10',
      description: 'Bold geometric patterns reflecting the energy of city life',
      colors: 'Gray, Black, Yellow, Red',
    },
    {
      id: 5,
      title: 'Spring Awakening',
      image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-03-25',
      description: 'Soft pastels celebrating the rebirth and renewal of spring',
      colors: 'Pink, Lavender, Mint, Cream',
    },
    {
      id: 6,
      title: 'Cosmic Dance',
      image: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-04-08',
      description: 'Vibrant purples and magentas depicting the mysteries of space',
      colors: 'Purple, Magenta, Blue, Silver',
    },
  ];

  useEffect(() => {
    const gallery = galleryRef.current;
    if (gallery) {
      // Parallax effect for gallery items
      gsap.fromTo(
        gallery.children,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: gallery,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-playfair">
            Art{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Explore our curated collection of vibrant artworks, each telling its unique story through color and form
          </p>
        </motion.div>

        <div
          ref={galleryRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {artworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              className="group relative cursor-pointer"
              whileHover={{ 
                scale: 1.02,
                z: 50,
                rotateY: 5,
                rotateX: 5,
              }}
              transition={{ 
                type: 'spring', 
                stiffness: 300,
                damping: 20 
              }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white/10 backdrop-blur-sm">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay that appears on hover */}
                  <motion.div
                    className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-bold mb-3 font-playfair">
                        {artwork.title}
                      </h3>
                      <p className="text-sm mb-2 opacity-80">
                        Created: {new Date(artwork.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                      <p className="text-sm mb-3 leading-relaxed">
                        {artwork.description}
                      </p>
                      <div className="border-t border-white/30 pt-2">
                        <p className="text-xs text-purple-300">
                          <span className="font-semibold">Colors used:</span> {artwork.colors}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
              </div>

              {/* 3D hover effect shadow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-6 blur-xl -z-20" />
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View More Artworks
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;