import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import BasketBin from './BasketBin';
import './Engineering.css'; // Ensure you have this CSS file in your project

const Engineering = () => {
    return (
        <div className="engineering">
            <h1>Engineering Projects</h1>
            <p>All my school/side projects</p>
            <div className="projects-container">
                <Link to="/projects/engineering/basketbin"><button>BasketBin</button></Link>
                <Link to="/projects/engineering/academates"><button>Academates</button></Link>
                <Link to="/projects/engineering/boombox"><button>BoomBox</button></Link>
                <Link to="/projects/engineering/tiktokviewpredictor"><button>TikTokViewPredictor</button></Link>
            </div>
            <div className="github-link">
                <a href="https://github.com/nicholaschen09" target="_blank" rel="noopener noreferrer">
                    <button>GitHub</button>
                </a>
            </div>
            <Routes>
                <Route path="/projects/engineering/basketbin" element={<BasketBin />} />
                <Route path="/projects/engineering/academates" element={<Academates />} />
                <Route path="/projects/engineering/tiktokviewpredictor" element={<tiktokviewpredictor />} />
                <Route path="/projects/engineering/basketbin" element={<BasketBin />} />
            </Routes>
        </div>
    );
};

export default Engineering;