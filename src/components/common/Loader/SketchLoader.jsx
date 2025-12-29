import { PenTool } from 'lucide-react';
import './SketchLoader.css';

const SketchLoader = () => {
    return (
        <div className="sketch-loader-container">
            <div className="pencil-drawing">
                <svg className="circle-svg" viewBox="0 0 100 100">
                    <circle 
                        className="circle-path" 
                        cx="50" 
                        cy="50" 
                        r="45" 
                    />
                </svg>
                {/* The Pencil Icon that follows the path */}
                <div className="pencil-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ transform: 'translate(20px, -20px) rotate(-45deg)' }}>
                         <PenTool size={32} color="#2D2D2D" fill="#2D2D2D" />
                    </div>
                </div>
            </div>
            <p className="loader-text">Sketching...</p>
        </div>
    );
};

export default SketchLoader;
