import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Heart, Star, Lightbulb } from 'lucide-react';


const About = () => {
  const features = [
    {
      icon: Palette,
      title: 'Color Mastery',
      description: 'Expert understanding of color theory and harmonious combinations',
    },
    {
      icon: Heart,
      title: 'Passionate Art',
      description: 'Every piece is created with love and dedication to artistic excellence',
    },
    {
      icon: Star,
      title: 'Unique Style',
      description: 'Distinctive artistic voice that stands out in the contemporary art world',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly exploring new techniques and pushing creative boundaries',
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-playfair">
            About{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
             the_Artt._Cart
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            the_Artt._Cart is more than just an art collection - it's a journey through the vibrant world of colors, 
            emotions, and creative expression. Our mission is to bring art closer to people and inspire 
            creativity in everyday life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6 font-playfair">
              Our Story
            </h3>
            <div className="space-y-4 text-white/90 leading-relaxed">
              <p>
                Founded by <span className="text-cyan-200 "> Anjali Verma &#9829;</span>, a passionate artist with a love for art, 
                the_Artt._Cart represents the intersection of traditional artistry and modern innovation. 
                she believe that art has the power to transform spaces, emotions, and perspectives.
              </p>
              <p>
                Each piece in our collection is carefully curated to showcase the beauty of 
                color theory, the power of composition, and the emotion that great art can evoke. 
                From abstract expressions to realistic portrayals, we celebrate all forms of 
                artistic creativity.
              </p>
              <p>
                Our commitment goes beyond just displaying art - she aim to educate, inspire, 
                and create a community of art lovers who appreciate the finer details of 
                creative expression.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-2xl"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="text-white text-center">
                  <div className="text-3xl font-bold mb-2">20+</div>
                  <div className="text-sm opacity-90">Artworks</div>
                </div>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-blue-500 to-teal-500 p-6 rounded-2xl"
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="text-white text-center">
                  <div className="text-3xl font-bold mb-2">1</div>
                  <div className="text-sm opacity-90">Artists</div>
                </div>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-green-500 to-emerald-500 p-6 rounded-2xl"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="text-white text-center">
                  <div className="text-3xl font-bold mb-2">2.2K+</div>
                  <div className="text-sm opacity-90">Visitors</div>
                </div>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-2xl"
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="text-white text-center">
                  <div className="text-3xl font-bold mb-2">5+</div>
                  <div className="text-sm opacity-90">Years</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="mb-4">
                <feature.icon className="h-8 w-8 text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-playfair">
                {feature.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;