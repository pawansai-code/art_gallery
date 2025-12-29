import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import './App.css';
import SketchLoader from './components/common/Loader/SketchLoader';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import AboutPage from './features/About/AboutPage';
import ArtistsPage from './features/Artists/ArtistsPage';
import Gallery from './features/Gallery/Gallery';
import Home from './features/Home/Home';
import ShopPage from './features/shop/ShopPage';


// Temporary Layout Component until proper layouts are built
const Layout = ({ children }) => (
  <div className="app-layout">
    <Header />
    <main className="main-content">
      {children}
    </main>
    <Footer />
  </div>
);

// Wrapper to handle animations and scroll
const AppContent = () => {
    const location = useLocation();
    const [pageLoading, setPageLoading] = useState(false);

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
        
        // Simulate loading on route change for effect
        setPageLoading(true);
        const timer = setTimeout(() => {
            setPageLoading(false);
        }, 1200); // 1.2s sketch animation

        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <Layout>
            <AnimatePresence>
                {pageLoading && (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999 }}
                    >
                        <SketchLoader />
                    </motion.div>
                )}
            </AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/artists" element={<ArtistsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<AboutPage />} />
                <Route path="/login" element={<div className="container"><h2>Login Page (Is Coming Soon)</h2></div>} />
            </Routes>
        </Layout>
    );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
