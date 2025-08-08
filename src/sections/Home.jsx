import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '../Images/Img1.jpg';
import img2 from '../Images/Img2.jpg';  
import img3 from '../Images/Img3.jpg';  

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const sectionRef = useRef(null);
  const colorCardsRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const colorCards = colorCardsRef.current;

    if (section && colorCards) {
      // Parallax effect for the section
      gsap.to(section, {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Color cards animation
      gsap.fromTo(
        colorCards.children,
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: colorCards,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  const colorTypes = [
    {
      name: 'Primary Colors',
      description: 'The foundation of all colors - Red, Blue, and Yellow',
      gradient: 'from-red-500 via-blue-500 to-yellow-500',
    },
    {
      name: 'Secondary Colors',
      description: 'Created by mixing primary colors - Orange, Green, Purple',
      gradient: 'from-orange-500 via-green-500 to-purple-500',
    },
    {
      name: 'Tertiary Colors',
      description: 'Sophisticated blends of primary and secondary colors',
      gradient: 'from-pink-500 via-teal-500 to-amber-500',
    },
    {
      name: 'Complementary',
      description: 'Opposite colors that create vibrant contrasts',
      gradient: 'from-blue-600 to-orange-400',
    },
  ];

  const artImages = [
    {
      id: 1,
      title: 'Abstract Dreams',
      image: img1
    },
    {
      id: 2,
      title: 'Color Harmony',
      image: img2,
    },
    {
      id: 3,
      title: 'Modern Expression',
      image: img3,
    },
  ];

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center pt-20 px-4"
    >
      <div className="max-w-6xl mx-auto text-center  relative top-64">
        {/* Main Hero Content */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 font-playfair"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Welcome to{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
              the_artt._Cart
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Where colors come alive and creativity knows no bounds. Experience a journey 
            through vibrant artworks that speak to the soul and ignite imagination.
          </motion.p>
          
          <motion.div
            className="text-lg text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Discover the magic of color theory, explore breathtaking artworks, 
            and immerse yourself in a world where every stroke tells a story.
          </motion.div>
        </motion.div>

        {/* Art Images with Parallax */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {artImages.map((art, index) => (
            <motion.div
              key={art.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              whileHover={{ scale: 1.05, rotateY: 10 }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-72 object-fill transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold">{art.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Color Theory Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 font-playfair">
            The Language of{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Colors
            </span>
          </h2>
          
          <div
            ref={colorCardsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {colorTypes.map((color, index) => (
              <motion.div
                key={color.name}
                className="group relative"
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className={`p-6 rounded-2xl bg-gradient-to-r ${color.gradient} shadow-lg transform transition-all duration-300 group-hover:shadow-2xl`}>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {color.name}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {color.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;