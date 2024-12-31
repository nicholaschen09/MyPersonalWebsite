import React from 'react';
import { Link } from 'react-router-dom';
import './Engineering.css'; // Ensure you have this CSS file in your project

const Engineering = () => {
    return (
        <div className="engineering">
            <h1>engineering projects</h1>
            <p>all my school/side projects</p>
            <div className="projects-container">
                <Link to="/engineering/BasketBin"><button>BasketBin</button></Link>
                <Link to="/engineering/Academates"><button>Academates</button></Link>
                <Link to="/engineering/BoomBox"><button>BoomBox</button></Link>
                <Link to="/engineering/BoomBox"><button>TikTokViewPredictor</button></Link>
            </div>
            <div className="github-link">
                <a href="https://github.com/nicholaschen09" target="_blank" rel="noopener noreferrer">
                    <button>GitHub</button>
                </a>
            </div>
        </div>
    );
};

export default Engineering;