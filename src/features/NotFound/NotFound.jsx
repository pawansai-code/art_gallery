import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="noise-overlay"></div>
      
      <motion.div 
        className="not-found-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          className="glitch-text"
          animate={{ 
            textShadow: [
              "-2px 0px 0px rgba(255,0,0,0.5), 2px 0px 0px rgba(0,255,255,0.5)", 
              "2px 0px 0px rgba(255,0,0,0.5), -2px 0px 0px rgba(0,255,255,0.5)", 
              "-2px 0px 0px rgba(255,0,0,0.5), 2px 0px 0px rgba(0,255,255,0.5)"
            ] 
          }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        >
          404
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Lost in the Canvas
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          The artwork you're looking for has been moved, removed, or never existed. 
          Let's get you back to the exhibition.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="home-button">
            Return to Gallery
          </Link>
        </motion.div>
      </motion.div>

      {/* Floating abstract shapes for interactivity */}
      <motion.div 
        className="shape shape-1"
        animate={{ 
          y: [0, -30, 0], 
          x: [0, 20, 0],
          rotate: [0, 10, -10, 0] 
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 6, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="shape shape-2"
        animate={{ 
          y: [0, 30, 0], 
          x: [0, -20, 0],
          rotate: [0, -15, 15, 0] 
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 8, 
          ease: "easeInOut" 
        }}
      />
    </div>
  );
};

export default NotFound;
