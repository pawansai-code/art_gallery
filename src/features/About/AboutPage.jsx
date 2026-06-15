import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImage from '../../assets/images/artist1.jpg';
import './AboutPage.css';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
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

const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="about-container">
                <motion.header 
                    className="about-header"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeIn}
                >
                    <span className="section-label">Meet the Artist</span>
                    <h1 className="about-title">Pawan Sai</h1>
                    <p className="about-subtitle">Bringing faces to life through graphite and charcoal.</p>
                </motion.header>
                
                <section className="profile-section">
                    <motion.div 
                        className="profile-image-container"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <motion.div 
                            className="profile-image-wrapper"
                            whileHover={{ scale: 1.02, rotate: -2 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <img src={profileImage} alt="Pawan Sai - Artist" className="profile-image" />
                        </motion.div>
                    </motion.div>
                    
                    <motion.div 
                        className="profile-content"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.span variants={fadeIn} className="section-label">My Story</motion.span>
                        
                        <div className="bio-text">
                            <motion.p variants={fadeIn}>
                                I'm a <span className="highlight">20-year-old artist</span> doing graphite and charcoal portraits for commission work.
                            </motion.p>
                            <br />
                            <motion.p variants={fadeIn}>
                                I first started drawing in my childhood with some scribbling using crayons and normal pencils. Later, I got inspired by my brother <span className="highlight">Logeshwaran</span>, who is a pencil sketch and sculpting artist. That inspiration helped me improve my drawing skills step by step, day by day.
                            </motion.p>
                            <br />
                            <motion.p variants={fadeIn}>
                                Then I was mentored by <span className="highlight">Praveen Joel</span>, who helped me to draw portraits with realistic shades and techniques.
                            </motion.p>
                            <br />
                            <motion.p variants={fadeIn}>
                                Since then, I've completed many commissioned works, turning my passion into a profession. The journey continues!
                            </motion.p>
                        </div>

                        <motion.div variants={fadeIn} className="signature">
                            <p style={{ fontFamily: '"Architects Daughter", cursive', fontSize: '1.5rem', color: '#FF6B6B' }}>
                                - Pawan Sai
                            </p>
                        </motion.div>
                    </motion.div>
                </section>
                
                <motion.section 
                    className="contact-section"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="contact-content">
                        <motion.h2 
                            className="contact-heading"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            Let's Work Together
                        </motion.h2>
                        <motion.p 
                            className="contact-desc"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            Interested in a portrait? Get in touch with me for pricing and details.
                        </motion.p>
                        
                        <div className="contact-details">
                            <motion.a 
                                href="tel:+919876543210" 
                                className="contact-item"
                                whileHover={{ scale: 1.05, x: 10, color: "#FF8E53" }}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Phone size={20} />
                                <span>+91 9080201820</span>
                            </motion.a>
                            <motion.a 
                                href="mailto:pawan@artbeatzz.com" 
                                className="contact-item"
                                whileHover={{ scale: 1.05, x: 10, color: "#FF8E53" }}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Mail size={20} />
                                <span>pawangopi2006@gmail.com</span>
                            </motion.a>
                            <motion.div 
                                className="contact-item"
                                whileHover={{ scale: 1.05, x: 10 }}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <MapPin size={20} />
                                <span>Chennai, India (Available Globally)</span>
                            </motion.div>
                        </div>

                        <div className="social-links">
                            <motion.a 
                                href="https://www.instagram.com/artbeatzz_17/" 
                                className="social-btn"
                                whileHover={{ scale: 1.1, rotate: 10 }}
                                whileTap={{ scale: 0.9 }}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.7 }}
                            >
                                <Instagram size={20} />
                            </motion.a>
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default AboutPage;
