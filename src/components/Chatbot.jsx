import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Palette, Sparkles, Heart } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm ArtBot, your creative companion. I'm here to help you explore the wonderful world of art and colors! 🎨",
      isBot: true,
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const artResponses = {
    greeting: [
      "Welcome to ArtCartt! I'm excited to talk about art with you! 🎨",
      "Hello there, fellow art enthusiast! How can I inspire your creative journey today?",
      "Greetings! Ready to dive into the colorful world of art and creativity?"
    ],
    colors: [
      "Colors are the vocabulary of art! Each hue tells a story - warm colors like red and orange evoke passion and energy, while cool blues and greens bring calm and serenity. What's your favorite color combination?",
      "The magic of color theory! Primary colors (red, blue, yellow) are the foundation, secondary colors (orange, green, purple) add harmony, and tertiary colors create sophisticated palettes. Would you like to know more about any specific color?",
      "Colors have incredible psychological power! Red can increase heart rate, blue promotes tranquility, green represents growth, and yellow sparks creativity. How do colors make you feel?"
    ],
    art: [
      "Art is the language of the soul! From abstract expressionism to photorealistic portraits, every style has its own beauty. Our gallery features diverse artworks that showcase different techniques and emotions.",
      "Every artwork in our collection tells a unique story through brushstrokes, color choices, and composition. Art has the power to transport us to different worlds and evoke deep emotions.",
      "The beauty of art lies in its subjectivity - what speaks to one person might whisper to another. That's what makes our gallery so special - there's something for every artistic soul!"
    ],
    gallery: [
      "Our gallery features stunning artworks ranging from vibrant abstracts to serene landscapes. Each piece includes details about the colors used, creation date, and the story behind it. Have you explored any particular artwork that caught your eye?",
      "The gallery is designed with interactive hover effects - when you hover over an artwork, you'll discover its creation story, color palette, and artistic significance. It's like having a personal art curator!",
      "We regularly update our gallery with new pieces. Each artwork is carefully selected to showcase different color theories and artistic techniques. Which style of art resonates with you most?"
    ],
    shows: [
      "Our art shows are immersive experiences where colors come alive! We host exhibitions featuring different themes - from 'Colors of Emotion' to 'Abstract Visions'. Would you like to know about upcoming events?",
      "Art shows at ArtCartt are more than exhibitions - they're celebrations of creativity! We bring together artists and art lovers to share the magic of visual storytelling.",
      "Each show is carefully curated to explore different aspects of art and color theory. Past exhibitions have included 'Spring Awakening' and 'Urban Rhythms' - each with its unique color story!"
    ],
    help: [
      "I can help you with information about our artworks, color theory, upcoming shows, or just chat about art in general! What would you like to explore?",
      "Feel free to ask me about our gallery, art techniques, color combinations, or anything creative! I'm here to make your ArtCartt experience more enriching.",
      "I'm your creative companion! Ask me about specific artworks, color meanings, art history, or let's just have a colorful conversation about creativity!"
    ],
    default: [
      "That's an interesting perspective! Art is all about different viewpoints and interpretations. What draws you to that particular aspect?",
      "I love how art can spark such diverse thoughts! Every person brings their own experience to viewing art. Tell me more about what you're thinking!",
      "Art has a way of connecting us all through shared emotions and experiences. Your thoughts add to the beautiful tapestry of artistic appreciation!",
      "Creativity flows in many forms! Whether it's through colors, shapes, or concepts, art speaks to each of us differently. What inspires your creativity?"
    ]
  };

  const getResponse = (input) => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      return artResponses.greeting[Math.floor(Math.random() * artResponses.greeting.length)];
    } else if (lowerInput.includes('color') || lowerInput.includes('colour')) {
      return artResponses.colors[Math.floor(Math.random() * artResponses.colors.length)];
    } else if (lowerInput.includes('art') || lowerInput.includes('paint') || lowerInput.includes('draw')) {
      return artResponses.art[Math.floor(Math.random() * artResponses.art.length)];
    } else if (lowerInput.includes('gallery') || lowerInput.includes('artwork')) {
      return artResponses.gallery[Math.floor(Math.random() * artResponses.gallery.length)];
    } else if (lowerInput.includes('show') || lowerInput.includes('exhibition') || lowerInput.includes('event')) {
      return artResponses.shows[Math.floor(Math.random() * artResponses.shows.length)];
    } else if (lowerInput.includes('help') || lowerInput.includes('what can you do')) {
      return artResponses.help[Math.floor(Math.random() * artResponses.help.length)];
    } else {
      return artResponses.default[Math.floor(Math.random() * artResponses.default.length)];
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          rotate: isOpen ? 180 : 0,
          background: isOpen 
            ? 'linear-gradient(45deg, #ef4444, #dc2626)' 
            : 'linear-gradient(45deg, #9333ea, #ec4899)'
        }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 text-white">
              <div className="flex items-center space-x-3">
                <motion.div
                  className="p-2 bg-white/20 rounded-full"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Palette className="h-5 w-5" />
                </motion.div>
                <div>
                  <h3 className="font-bold text-lg">ArtBot</h3>
                  <p className="text-xs opacity-90">Your Creative Companion</p>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Sparkles className="h-4 w-4 ml-auto" />
                </motion.div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 h-64 overflow-y-auto space-y-3">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`max-w-xs p-3 rounded-2xl text-sm ${
                      message.isBot
                        ? 'bg-white/20 text-white border border-white/30'
                        : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    }`}
                  >
                    {message.isBot && (
                      <div className="flex items-center space-x-1 mb-1">
                        <Palette className="h-3 w-3" />
                        <span className="text-xs opacity-75">ArtBot</span>
                      </div>
                    )}
                    <p className="leading-relaxed">{message.text}</p>
                  </div>
                </motion.div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="bg-white/20 p-3 rounded-2xl border border-white/30">
                    <div className="flex space-x-1">
                      <motion.div
                        className="w-2 h-2 bg-purple-400 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-pink-400 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-purple-400 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/20">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about art, colors, or our gallery..."
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-purple-400 text-sm"
                />
                <motion.button
                  onClick={handleSendMessage}
                  className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!inputValue.trim()}
                >
                  <Send className="h-4 w-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;