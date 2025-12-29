import { motion } from 'framer-motion';
import { Instagram, Palette, User } from 'lucide-react';
import artist1 from '../../assets/images/artist1.jpg';
import artist2 from '../../assets/images/artist2.png';
import './ArtistsPage.css';

// Placeholder images - USER SHOULD REPLACE THESE
const ARTIST_IMAGES = {
    pawan: artist1,
    joel: artist2
};

const ArtistsPage = () => {
    
    const artists = [
        {
            id: 1,
            name: "Pawan Sai",
            handle: "@artbeatzz",
            bio: "Capturing the soul through charcoal and graphite. Specializing in hyper-realistic portraits that tell a story beyond the paper.",
            image: ARTIST_IMAGES.pawan,
            instagram: "https://www.instagram.com/artbeatzz_17/", 
            role: "Lead Artist & Founder"
        },
        {
            id: 2,
            name: "Praveen Joel",
            handle: "@joel_artzz",
            bio: "A master of perspective and detail. Bringing imagination to life with bold strokes and a unique artistic vision.",
            image: ARTIST_IMAGES.joel,
            instagram: "https://www.instagram.com/joel_artzz/", 
            role: "Featured Artist"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, rotate: -2 },
        visible: { 
            opacity: 1, 
            y: 0, 
            rotate: 0,
            transition: { 
                type: "spring",
                stiffness: 100,
                damping: 12
            } 
        }
    };

    return (
        <div className="artists-page">
            <div className="container">
                <motion.div 
                    className="artists-header"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="artists-title">The Creative Minds</h1>
                    <p className="artists-subtitle">Meet the visionaries behind the strokes.</p>
                </motion.div>

                <motion.div 
                    className="artists-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {artists.map((artist) => (
                        <motion.div 
                            key={artist.id} 
                            className="artist-card-container"
                            variants={cardVariants}
                            whileHover={{ scale: 1.02 }} 
                        >
                            <div className="artist-card">
                                <div className="artist-img-wrapper">
                                    <img src={artist.image} alt={artist.name} className="artist-img" />
                                    <div className="artist-overlay">
                                    </div>
                                </div>
                                <div className="artist-info">
                                    <h2 className="artist-name">{artist.name}</h2>
                                    <span className="artist-handle">{artist.handle}</span>
                                    <div className="artist-socials">
                                        <a href={artist.instagram} target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="Instagram">
                                            <Instagram size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default ArtistsPage;
