import { motion } from 'framer-motion';
import SketchButton from '../../components/common/SketchButton';
import './ShopPage.css';

const ShopPage = () => {
    const pricingData = [
        {
            size: "A4",
            dimensions: "8.3 x 11.7 inches",
            prices: {
                single: 800,
                double: 1000
            }
        },
        {
            size: "A3",
            dimensions: "11.7 x 16.5 inches",
            prices: {
                single: 1000,
                double: 1200
            }
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="shop-page">
            <div className="container">
                <motion.div 
                    className="shop-header"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="shop-title">Commission Your Portrait</h1>
                    <p className="shop-subtitle">Turn your memories into timeless graphite art.</p>
                </motion.div>

                <motion.div 
                    className="pricing-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {pricingData.map((item, index) => (
                        <motion.div 
                            key={index} 
                            className="pricing-card"
                            variants={cardVariants}
                            whileHover={{ y: -5 }}
                        >
                            <div className="card-header">
                                <h2 className="size-title">{item.size} <span className="size-dim">({item.dimensions})</span></h2>
                            </div>
                            <div className="price-details">
                                <div className="price-row">
                                    <span className="face-type">Single Face</span>
                                    <span className="price">₹{item.prices.single}</span>
                                </div>
                                <div className="divider"></div>
                                <div className="price-row">
                                    <span className="face-type">Double Face</span>
                                    <span className="price">₹{item.prices.double}</span>
                                </div>
                            </div>
                            <div className="card-action">
                                <SketchButton className="order-btn" onClick={() => alert("Order functionality coming soon!")}>
                                    Place Order
                                </SketchButton>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div 
                    className="custom-order-note"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <p>For custom sizes or more than 2 faces, please contact us directly.</p>
                </motion.div>
            </div>
        </div>
    );
};

export default ShopPage;
