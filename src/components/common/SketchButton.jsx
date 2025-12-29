import { motion } from 'framer-motion';
import './SketchButton.css';

const SketchButton = ({ children, onClick, className = '', ...props }) => {
    return (
        <motion.button 
            className={`sketch-button ${className}`} 
            onClick={onClick}
            whileTap={{ scale: 0.95 }}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default SketchButton;
