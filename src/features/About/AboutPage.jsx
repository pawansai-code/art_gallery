import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import profileImage from '../../assets/images/artist1.jpg';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="about-container">
                <header className="about-header">
                    <span className="section-label">Meet the Artist</span>
                    <h1 className="about-title">Pawan Sai</h1>
                    <p className="about-subtitle">Bringing faces to life through graphite and charcoal.</p>
                </header>
                <section className="profile-section">
                    <div className="profile-image-container">
                        <div className="profile-image-wrapper">
                            <img src={profileImage} alt="Pawan Sai - Artist" className="profile-image" />
                        </div>
                    </div>
                    
                    <div className="profile-content">
                        <span className="section-label">My Story</span>
                        
                        <div className="bio-text">
                            <p>
                                I'm a <span className="highlight">20-year-old artist</span> doing graphite and charcoal portraits for commission work.
                            </p>
                            <br />
                            <p>
                                I first started drawing in my childhood with some scribbling using crayons and normal pencils. Later, I got inspired by my brother <span className="highlight">Logeshwaran</span>, who is a pencil sketch and sculpting artist. That inspiration helped me improve my drawing skills step by step, day by day.
                            </p>
                            <br />
                            <p>
                                Then I was mentored by <span className="highlight">Praveen Joel</span>, who helped me to draw portraits with realistic shades and techniques.
                            </p>
                            <br />
                            <p>
                                Since then, I've completed many commissioned works, turning my passion into a profession. The journey continues!
                            </p>
                        </div>

                        <div className="signature">
                            <p style={{ fontFamily: '"Architects Daughter", cursive', fontSize: '1.5rem', color: '#FF6B6B' }}>
                                - Pawan Sai
                            </p>
                        </div>
                    </div>
                </section>
                <section className="contact-section">
                    <div className="contact-content">
                        <h2 className="contact-heading">Let's Work Together</h2>
                        <p className="contact-desc">
                            Interested in a portrait? Get in touch with me for pricing and details.
                        </p>
                        
                        <div className="contact-details">
                            <a href="tel:+919876543210" className="contact-item">
                                <Phone size={20} />
                                <span>+91 9080201820</span>
                            </a>
                            <a href="mailto:pawan@artbeatzz.com" className="contact-item">
                                <Mail size={20} />
                                <span>pawangopi2006@gmail.com</span>
                            </a>
                            <div className="contact-item">
                                <MapPin size={20} />
                                <span>Chennai, India (Available Globally)</span>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="https://www.instagram.com/artbeatzz_17/" className="social-btn">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;
