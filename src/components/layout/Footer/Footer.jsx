import { Instagram, Mail, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-socials">
                    <a 
                        href="https://www.instagram.com/artbeatzz_17/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-link" 
                        aria-label="Instagram"
                    >
                        <Instagram size={24} />
                    </a>
                    <a 
                        href="https://wa.me/9080201820" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-link" 
                        aria-label="WhatsApp"
                    >
                        <MessageCircle size={24} />
                    </a>
                    <a 
                        href="pawangopi2006@gamil.com" 
                        className="social-link" 
                        aria-label="Email"
                    >
                        <Mail size={24} />
                    </a>
                </div>
                <div className="footer-contact">
                    <a href="mailto:artgallery@gmail.com" className="contact-link">artgallery@gmail.com</a>
                </div>
                <div className="footer-copyright">
                    <p>&copy; {new Date().getFullYear()} Art Gallery. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
