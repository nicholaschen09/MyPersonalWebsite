import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import BasketBin from './BasketBin';
import TikTokViewPredictor from './TikTokViewPredictor';
import Academates from './Academates';
import './Engineering.css'; // Ensure you have this CSS file in your project

const Engineering = () => {
    return (
        <div className="engineering">
            <h1>engineering projects</h1>
            <p>All my school/side projects</p>
            <div className="projects-container">
                <Link to="basketbin"><button>basketbin</button></Link>
                <Link to="academates"><button>Academates</button></Link>
                <Link to="tiktokviewpredictor"><button>TikTokViewPredictor</button></Link>
            </div>
            <div className="github-link">
                <a href="https://github.com/nicholaschen09" target="_blank" rel="noopener noreferrer">
                    <button>GitHub</button>
                </a>
            </div>
            <Routes>
                <Route path="basketbin" element={<BasketBin />} />
                <Route path="academates" element={<Academates />} />
                <Route path="tiktokviewpredictor" element={<TikTokViewPredictor />} />
            </Routes>
        </div>
    );
};

export default Engineering;