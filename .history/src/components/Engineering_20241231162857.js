import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import BasketBin from './BasketBin';
import TikTokViewPredictor from './TikTokViewPredictor';
import Academates from './Academates';
import SolidWorks from './SolidWorks'; // Ensure you have this component
import './Engineering.css'; // Ensure you have this CSS file in your project

const Engineering = () => {
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <div>
            <button className="back-button" onClick={handleGoBack}>
                Back
            </button>
            <div className="engineering">
                <h1>engineering projects</h1>
                <p>All my school/side projects</p>
                <Link to="basketbin"><button>basketbin</button></Link>
                <Link to="academates"><button>academates</button></Link>
                <Link to="tiktokviewpredictor"><button>tiktok view predictor</button></Link>
                <Link to="solidworks"><button>solidworks</button></Link>
            </div>

            <Routes>
                <Route path="basketbin" element={<BasketBin />} />
                <Route path="academates" element={<Academates />} />
                <Route path="tiktokviewpredictor" element={<TikTokViewPredictor />} />
                <Route path="solidworks" element={<Solidworks />} />
            </Routes>
        </div>
    );
};

export default Engineering;