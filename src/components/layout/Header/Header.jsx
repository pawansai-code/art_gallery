import { Mail, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        
        <Link to="/" className="logo-link">
          <Palette color="#2D2D2D" size={28} />
          <span className="logo-text">
            ART<span className="logo-accent">BEATZZ</span>
          </span>
        </Link>
        
        <nav className="nav-menu">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/gallery" className="nav-link">
            Gallery
          </Link>
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
          <Link to="/artists" className="nav-link">
            Artists
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </nav>
        
        <div className="header-actions">
          <Link to="/contact" className="btn-icon">
            <Mail size={24} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
