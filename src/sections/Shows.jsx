import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

const Shows = () => {
  const upcomingShows = [
    {
      id: 1,
      title: 'Colors of Emotion',
      date: '2024-05-15',
      time: '7:00 PM - 10:00 PM',
      location: 'Gallery Downtown, New York',
      description: 'An immersive exhibition exploring the emotional depth of color in contemporary art.',
      attendees: 150,
      status: 'upcoming',
    },
    {
      id: 2,
      title: 'Abstract Visions',
      date: '2024-06-03',
      time: '6:30 PM - 9:30 PM',
      location: 'Modern Art Space, Los Angeles',
      description: 'A showcase of abstract artworks that challenge perception and ignite imagination.',
      attendees: 200,
      status: 'upcoming',
    },
    {
      id: 3,
      title: 'Digital Meets Traditional',
      date: '2024-06-20',
      time: '5:00 PM - 8:00 PM',
      location: 'Tech Art Hub, San Francisco',
      description: 'Where digital innovation meets traditional artistic techniques.',
      attendees: 100,
      status: 'upcoming',
    },
  ];

  const pastShows = [
    {
      id: 4,
      title: 'Spring Awakening',
      date: '2024-03-10',
      location: 'Art Center, Chicago',
      description: 'A celebration of renewal and growth through vibrant spring-inspired artworks.',
      attendees: 180,
      status: 'completed',
    },
    {
      id: 5,
      title: 'Urban Rhythms',
      date: '2024-02-14',
      location: 'City Gallery, Miami',
      description: 'Capturing the pulse and energy of city life through dynamic color compositions.',
      attendees: 220,
      status: 'completed',
    },
  ];

  return (
    <section id="shows" className="py-20 px-4">
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
            <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              Shows
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Join us at our exclusive exhibitions and experience art in a whole new dimension
          </p>
        </motion.div>

        {/* Upcoming Shows */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 font-playfair">
            Upcoming Shows
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {upcomingShows.map((show, index) => (
              <motion.div
                key={show.id}
                className="group p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="mb-4">
                  <div className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mb-3">
                    Upcoming
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2 font-playfair group-hover:text-purple-300 transition-colors">
                    {show.title}
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    {show.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-white/70 text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-purple-400" />
                    {new Date(show.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                  <div className="flex items-center text-white/70 text-sm">
                    <Clock className="h-4 w-4 mr-2 text-purple-400" />
                    {show.time}
                  </div>
                  <div className="flex items-center text-white/70 text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-purple-400" />
                    {show.location}
                  </div>
                  <div className="flex items-center text-white/70 text-sm">
                    <Users className="h-4 w-4 mr-2 text-purple-400" />
                    Expected: {show.attendees} attendees
                  </div>
                </div>

                <motion.button
                  className="w-full mt-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Past Shows */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 font-playfair">
            Past Exhibitions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastShows.map((show, index) => (
              <motion.div
                key={show.id}
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-700/20 to-gray-600/20 backdrop-blur-sm border border-white/10 hover:border-gray-400/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="mb-4">
                  <div className="inline-block px-3 py-1 bg-gray-500/20 text-gray-400 rounded-full text-sm font-medium mb-3">
                    Completed
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2 font-playfair group-hover:text-gray-300 transition-colors">
                    {show.title}
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    {show.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-white/70 text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                    {new Date(show.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                  <div className="flex items-center text-white/70 text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                    {show.location}
                  </div>
                  <div className="flex items-center text-white/70 text-sm">
                    <Users className="h-4 w-4 mr-2 text-gray-400" />
                    Attended: {show.attendees} people
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-red-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Stay Updated on Future Shows
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Shows;