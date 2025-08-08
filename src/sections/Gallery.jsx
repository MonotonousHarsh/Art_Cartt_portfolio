import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '../Images/Img1.jpg';
import img4 from '../Images/img4.jpg'
import img5 from '../Images/img5.jpg'
import img6 from '../Images/img6.jpg'
import img7 from '../Images/img7.jpg'
import img8 from '../Images/img8.jpg'
import img9 from '../Images/img9.jpg'
import img10 from '../Images/img10.jpg'
import img11 from '../Images/img11.jpg'
import img12 from '../Images/img12.jpg'
import img13 from '../Images/img13.jpg'
import img14 from '../Images/img14.jpg'
import img15 from '../Images/img15.jpg'
import img16 from '../Images/img16.jpg'
import img17 from '../Images/img17.jpg'
import img18 from '../Images/img18.jpg'
import img19 from '../Images/img19.jpg'
import img20 from '../Images/img20.jpg'

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const galleryRef = useRef(null);

  const artworks = [
    {
      id: 1,
      title: 'Twilight Pier Reverie',
      image: img4,
      date: '2024-01-15',
      description: ' A tranquil pink‑purple sunset over calm waters with a silhouetted pier and lamppost.',
      colors: 'Blush Pink, Lavender Purple, Coral Orange, Horizon Blue, Silhouette Black, Soft Yellow',
    },
    {
      id: 2,
      title: 'Golden Divide',
      image: img5,
      date: '2024-02-03',
      description: ' A split meadow and tranquil lake bathed in a warm, golden‑orange sunset, framed by stark, leafless trees against distant purple hills.',
      colors: ' Golden Yellow, Tangerine Orange, Emerald Green, Teal Blue, Lavender Purple, Deep Black',
    },
    {
      id: 3,
      title: 'Sylvan Lightfall',
      image: img6,
      date: '2024-02-20',
      description: 'Sunbeams pierce a vaulted emerald forest, illuminating moss‑y ground and tall, shadowy trunks.',
      colors: 'Forest Green, Teal Blue, Moss Green, Dark Brown, Soft Gold.',
    },
    {
      id: 4,
      title: 'Cherry Blossom Reflection',
      image: img7,
      date: '2024-03-10',
      description: ' Vibrant pink blossoms arch over a serene, snow‑capped mountain mirrored in a tranquil blue lake.',
      colors: 'Blossom Pink, Cerulean Blue, Indigo Purple, Midnight Navy, Soft White.',
    },
    {
      id: 5,
      title: 'Urban Twilight Whispers',
      image: img8,
      date: '2024-03-25',
      description: 'A crescent moon and birds drift above silhouetted rooftops and power lines against a vibrant pink‑orange dusk sky.',
      colors: ' Rose Pink, Tangerine Orange, Soft Yellow, Charcoal Black, Slate Gray, Olive Green.',
    },
    {
      id: 6,
      title: 'Emberwood Retreat',
      image: img9,
      date: '2024-04-08',
      description: 'A lone white cabin beside a glassy lake, framed by blazing autumn foliage and evergreens, its reflection mirrored beneath a crescent‑lit sky.',
      colors: 'Fire Red, Pumpkin Orange, Forest Green, Sapphire Blue, Midnight Teal, Soft White.',
    },

     {
      id: 7,
      title: 'Dawn’s Serene Meadow',
      image: img10,
      date: '2024-04-08',
      description: ' A lush green field bordered by towering pines, with a mist‑cloaked mountain rising beneath a soft pink and blue dawn sky.',
      colors: 'Meadow Green,Forest Green,Teal Blue,Blush Pink,Vender Gray,Deep Charcoal',

    },
     {
      id: 8,
      title: 'Twilight’s Embrace',
      image: img11,
      date: '2024-04-08',
      description:  'A fiery sunset melts into a star‑spattered sky above a serene lake, framed by grassy banks and distant mountain silhouettes.',
      colors: 'Sunset Orange, Coral Pink, Magenta, Indigo Purple, Emerald Green, Deep Navy',
    },
     {
      id: 9,
      title: 'Neon Dusk Grove',
      image: img12,
      date: '2024-04-08',
      description: ' Slender pines stand in silhouette over a shadowed forest floor, backlit by a glowing gradient sky of teal, magenta, and golden hues.',
      colors: ' Teal Blue, Magenta Pink, Golden Yellow, Deep Navy, Black.',
    },
     {
      id: 10,
      title: 'Urban Twilight Symphony',
      image: img13,
      date: '2024-04-08',
      description: 'Silhouetted power lines, rooftops, and foliage against a vibrant yellow‑to‑purple sunset gradient.',
      colors: 'Golden Yellow,Warm Orange,Magenta,Deep Purple,Black'
     },
     {
      id: 11,
      title: 'Forest Blossom Cottage',
      image: img14,
      date: '2024-04-08',
      description: 'A cozy wooden cabin surrounded by wildflowers at the edge of a lush evergreen forest.',
      colors: 'Forest Green,Emerald,Chestnut Brown,Red,White',
    },
     {
      id: 12,
      title: 'Twilight Transmission',
      image: img15,
      date: '2024-04-08',
      description: 'Silhouetted utility poles and tree branches against a vibrant pink‑to‑blue sunset sky.',
      colors: 'Sky Blue,Soft Pink,Lavender,Golden Orange,Black',
    },
     {
      id: 13,
      title: 'Seaside Garden Cottage',
      image: img16,
      date: '2024-04-08',
      description: 'A cozy beach hut beside a turquoise sea, framed by a leaning palm tree and a vibrant flower-lined path.Vibrant purples and magentas depicting the mysteries of space',
      colors: '  Turquoise,Emerald Green,Sandy Beige,Coral Pink,Sky Blue'
    },
     {
      id: 14,
      title: 'Enchanted Moonlit Grove',
      image: img17,
      date: '2024-04-08',
      description: 'A serene forest clearing with towering trees, glowing fireflies, and a softly illuminated pond under a dusky',
      colors: 'Purple, Magenta, Blue, Silver',
    },
     {
      id: 15,
      title: 'Autumn Alpine Reflection',
      image: img18,
      date: '2024-04-08',
      description: 'A vibrant sunset bathes blue‑tinted mountains and a glassy lake, with a golden‑leafed tree standing between a lush meadow and calm waters.',
      colors: 'Teal Blue,Amber Orange,Golden Yellow,Forest Green,Soft Lavender',



    },
     {
      id: 16,
      title: 'Misty Woodland Passage',
      image: img19,
      date: '2024-04-08',
      description: 'A lone red car makes its way through a flooded, mist‑shrouded forest path, framed by towering tree trunks and dense undergrowth.',
      colors: 'Forest Green, Olive, Dark Brown, Rust Red, Misty White'

    },
     {
      id: 17,
      title: 'Vintage Antiquités Facade',
      image: img20,
      date: '2024-04-08',
      description: 'Detailed pencil sketch of an antiques shop front, complete with a café door, potted plants, striped awning, and window display.',
      colors: ' Black, White, Gray',
    },
     {
      id: 18,
      title: 'Whispers of the Willow',
      image: img1,
      date: '2024-04-08',
      description: 'A lone wooden rowboat drifts on a glassy, lotus‑dotted pond, bathed in dappled sunlight streaming through lush overhanging willow branches, as delicate butterflies flutter at the water’s edge.',
      colors: 'Emerald Green ,Teal Blue,Deep Azure,Golden Yellow ,Soft Pink,Rich Brown',
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