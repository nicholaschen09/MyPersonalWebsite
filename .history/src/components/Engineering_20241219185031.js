import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import BasketBin from './BasketBin';
import TikTokViewPredictor from './TikTokViewPredictor';
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
                <Link to="/engineering/TikTokViewPredictor"><button>TikTokViewPredictor</button></Link>
            </div>
            <div className="github-link">
                <a href="https://github.com/nicholaschen09" target="_blank" rel="noopener noreferrer">
                    <button>GitHub</button>
                </a>
            </div>
            <Routes>
                <Route path="BasketBin" element={<BasketBin />} />
                <Route path="Academates" element={<Academates />} />
                <Route path="BoomBox" element={<BoomBox />} />
                <Route path="TikTokViewPredictor" element={<TikTokViewPredictor />} />
            </Routes>
        </div>
    );
};

export default Engineering;