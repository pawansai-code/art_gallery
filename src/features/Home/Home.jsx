import { motion, useScroll, useTransform } from 'framer-motion';
import { Frame, Layers, PenTool } from 'lucide-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import achieve1 from '../../assets/images/achieve1.jpeg';
import video from '../../assets/images/achievement1.mp4';
import pencil from '../../assets/images/pencil.jpeg';
import SketchButton from '../../components/common/SketchButton';
import './Home.css';
import { fetchArtworks } from './homeSlice';

const Home = () => {
    const dispatch = useDispatch();
    const { artworks, isLoading } = useSelector((state) => state.home);

    useEffect(() => {
        dispatch(fetchArtworks());
    }, [dispatch]);

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    // Typewriter effect variants
    const typewriterContainer = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08, // Adjust typing speed
                delayChildren: 0.5 // Wait slightly for section fade-in
            }
        }
    };

    const typewriterChar = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };

    const titleText = "Experience the raw beauty of graphite.";

    const { scrollY } = useScroll();
    const yHero = useTransform(scrollY, [0, 500], [0, 150]); // Parallax effect

    return (
        <div className="gallery-page">
            {/* 1. Hero Section: The Hook */}
            <motion.section 
                className="hero-section"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                style={{ position: 'relative' }} 
            >
                <div className="hero-background-wrapper" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: -1 }}>
                    <motion.div 
                        className="hero-background" 
                        style={{ y: yHero, width: '100%', height: '100%' }} // Apply Parallax
                    />
                </div>
                
                <div className="hero-content">
                    {/* Character-by-character "step by step" animation */}
                    <motion.h1 
                        className="hero-title" 
                        variants={typewriterContainer}
                    >
                        {titleText.split("").map((char, index) => (
                            <motion.span key={index} variants={typewriterChar}>
                                {char}
                            </motion.span>
                        ))}
                    </motion.h1>
                    <motion.p className="hero-subtitle" variants={fadeInUp}>
                        Original, hand-drawn pencil sketches for your home and collection.
                    </motion.p>
                    <motion.div variants={fadeInUp}>
                        <SketchButton onClick={() => window.location.href='/Gallery'} style={{color: '#2D2D2D', borderColor: '#2D2D2D'}}>
                            View Artworks
                        </SketchButton>
                    </motion.div>
                </div>
            </motion.section>

            {/* 2. Selected Works (Featured Gallery) */}
            <section className="selected-works">
                <div className="section-header">
                    <h2 className="section-title">From My Sketchbook</h2>
                    <p>A curated selection of my latest original drawings.</p>
                </div>

                {isLoading ? (
                    <div style={{textAlign: 'center'}}>Loading sketches...</div>
                ) : (
                    <motion.div 
                        className="achievements-grid" style={{ justifyContent: 'center', gap: '2rem' }}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {artworks.slice(0, 3).map((art) => (
                            <motion.div key={art.id} className="art-card" variants={fadeInUp}>
                                <div className="art-image-wrapper">
                                    <img src={art.image} alt={art.title} loading="lazy" />
                                </div>
                                <div className="art-info">
                                    <h3 className="art-title">{art.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </section>

            {/* 3. The Process (Trust Builder) */}
            <section className="process-section">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Behind the Graphite</h2>
                    <div className="process-steps">
                        <div className="process-step">
                            <div className="step-icon"><PenTool size={32} /></div>
                            <h3 className="step-title">The Rough Outline</h3>
                            <p className="step-desc">Starting with light strokes on textured paper, capturing the essence of the form.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-icon"><Layers size={32} /></div>
                            <h3 className="step-title">Layering Depth</h3>
                            <p className="step-desc">Building shadows and highlights with varying grades of charcoal and graphite.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-icon"><Frame size={32} /></div>
                            <h3 className="step-title">The Final Seal</h3>
                            <p className="step-desc">Each piece is sealed to prevent smudging and prepared for preservation.</p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* 4. The Artist (About Section) */}
            <section className="artist-section">
                <motion.div 
                    className="artist-container"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <img 
                        src={pencil}
                        alt="The Artist" 
                        className="artist-image" 
                    />
                    <div className="artist-bio">
                        <h2>Meet the Hand</h2>
                        <p>
                            "I believe in the permanence of paper in a digital world. 
                            There is something profoundly human about the friction of pencil on paper, 
                            the smell of graphite, and the irreversible nature of a bold stroke."
                        </p>
                        <p>
                            I spend my days chasing light and shadow, 
                            translating the world around me into monochrome memories.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* 5. Achievements Section */}
            <section className="achievements-section">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Moments of Pride</h2>
                    <p>Honored to share my art with inspiring personalities.</p>
                </motion.div>

                <div className="achievements-grid">
                    {/* Video Card */}
                    <motion.div 
                        className="achievement-card"
                        whileHover={{ scale: 1.02 }}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="achievement-media">
                            {/* USER: Replace 'src' with your actual video file path */}
                            <video controls poster="https://via.placeholder.com/500x300?text=Video+Thumbnail">
                                <source src={video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <h3 className="achievement-title">A Gift for Master Sandy</h3>
                        <p className="achievement-desc">
                            Presenting a charcoal portrait to the legendary Dance Master Sandy. An unforgettable moment of appreciation.
                        </p>
                    </motion.div>

                    {/* Photo Card */}
                    <motion.div 
                        className="achievement-card"
                        whileHover={{ scale: 1.02 }}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="achievement-media">
                            {/* USER: Replace 'src' with your actual image file path */}
                            <img 
                                src={achieve1} 
                                alt="Selfie with Master Sandy" 
                            />
                        </div>
                        <h3 className="achievement-title">Cherished Memory</h3>
                        <p className="achievement-desc">
                            A quick selfie to freeze the moment. Grateful for his humble and encouraging words about my artwork.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 6. Social Proof / Testimonials */}
            <section className="testimonials-section">
                <h2 className="section-title" style={{color: '#FDFBF7'}}>Collectors' Notes</h2>
                <div className="testimonials-grid">
                    <motion.div 
                        className="testimonial-card"
                        whileHover={{ scale: 1.05, rotate: 0 }}
                    >
                        <p className="testimonial-text">"The artwork feels calm and thoughtful. I keep noticing new details every time I look at it. It brings a quiet warmth to my space."</p>
                        <span className="testimonial-author">- Ponmalar</span>
                    </motion.div>
                    <motion.div 
                        className="testimonial-card"
                        whileHover={{ scale: 1.05, rotate: 0 }}
                    >
                        <p className="testimonial-text">"Beautifully done. The simplicity and emotion in the piece really stand out. It adds a peaceful mood to my room."</p>
                        <span className="testimonial-author">- Prathiksha Chandrasekar</span>
                    </motion.div>
                    <motion.div 
                        className="testimonial-card"
                        whileHover={{ scale: 1.05, rotate: 0 }}
                    >
                        <p className="testimonial-text">"I love the overall feel of this artwork. It’s subtle, expressive, and looks even better in person"</p>
                        <span className="testimonial-author">- Meganathan</span>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
