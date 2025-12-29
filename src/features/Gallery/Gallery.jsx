import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArtworks } from '../Home/homeSlice';
import './Gallery.css';
import SketchLoader from '../../components/common/Loader/SketchLoader';

const Gallery = () => {
    const dispatch = useDispatch();
    const { artworks, isLoading } = useSelector((state) => state.home);
    const [selectedImage, setSelectedImage] = useState(null);
    
    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Fetch artworks on mount
    useEffect(() => {
        if (artworks.length === 0) {
            dispatch(fetchArtworks());
        }
    }, [dispatch, artworks.length]);

    // Pagination Logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = artworks.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(artworks.length / itemsPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        },
        exit: { opacity: 0 }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } }
    };

    return (
        <div className="gallery-page">
            <div className="container text-center">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-5"
                >
                    <h1 className="display-4 fw-bold" style={{ color: '#2c3e50' }}>Art Gallery</h1>
                    <p className="lead text-muted">Explore the collection of original sketches and artworks.</p>
                </motion.div>

                {isLoading ? (
                    <div className="text-center py-5">
                        <div className="spinner-border text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <>
                        <motion.div 
                            className="row"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            key={currentPage} // Triggers animation on page change
                        >
                            {currentItems.map((art) => (
                                <div key={art.id} className="col-6 col-md-4 gallery-card-wrapper mb-4">
                                    <motion.div 
                                        className="gallery-card h-100"
                                        variants={cardVariants}
                                        layoutId={`card-${art.id}`}
                                        onClick={() => setSelectedImage(art)}
                                    >
                                        <div className="gallery-image-container">
                                            <motion.img 
                                                src={art.image} 
                                                alt={art.title} 
                                                className="gallery-image"
                                                layoutId={`image-${art.id}`}
                                            />
                                            <div className="overlay d-flex align-items-center justify-content-center" 
                                                 style={{
                                                     position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
                                                     background: 'rgba(0,0,0,0.3)', opacity: 0, transition: 'opacity 0.3s'
                                                 }}
                                            >
                                               <ZoomIn color="white" size={32} />
                                            </div>
                                        </div>
                                        <div className="gallery-info text-start">
                                            <div>
                                                <h5 className="gallery-title mb-1">{art.title}</h5>
                                                <p className="gallery-description small mb-2 text-muted">
                                                    {art.description ? art.description.substring(0, 60) + '...' : 'A beautiful piece of art.'}
                                                </p>
                                            </div>
                                            <div className="gallery-meta mt-auto">
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Pagination Controls */}
                        {totalPages > 1 && (
                            <motion.div 
                                className="pagination-container"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <button 
                                    className="pagination-nav-btn" 
                                    onClick={() => paginate(currentPage - 1)}
                                    disabled={currentPage === 1}
                                >
                                    <ChevronLeft size={18} /> Prev
                                </button>
                                
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <button
                                        key={i + 1}
                                        onClick={() => paginate(i + 1)}
                                        className={`pagination-btn ${currentPage === i + 1 ? 'active' : ''}`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}

                                <button 
                                    className="pagination-nav-btn" 
                                    onClick={() => paginate(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                >
                                    Next <ChevronRight size={18} />
                                </button>
                            </motion.div>
                        )}
                    </>
                )}
            </div>

            {/* Full Size Image Preview Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div 
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div 
                            className="modal-content-container"
                            layoutId={`card-${selectedImage.id}`} // Shared layout ID for seamless transition
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="modal-close-btn" onClick={() => setSelectedImage(null)}>
                                <X />
                            </button>
                            <motion.img 
                                src={selectedImage.image} 
                                alt={selectedImage.title} 
                                className="modal-image"
                                layoutId={`image-${selectedImage.id}`}
                            />
                            <motion.div 
                                className="modal-info-bar"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
                            >
                                <h2 className="h4 mb-1">{selectedImage.title}</h2>
                                <p className="text-muted mb-0">{selectedImage.description}</p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;