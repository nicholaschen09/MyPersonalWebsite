import React from 'react';
import './Miscellaneous.css';

const Miscellaneous = () => {
    const handleGoBack = () => {
        window.history.back();
    };
    return (
        <div className="miscellaneous">
            <button className="back-button" onClick={handleGoBack}>
                Back
            </button>
            
            <h1>miscellaneous projects </h1>
            <p>all my random projects.</p>
            <div className="engineering">

                <h1>engineering projects</h1>
                <p>All my school/side projects</p>
                <Link to="basketbin"><button>basketbin</button></Link>
                <Link to="academates"><button>academates</button></Link>
                <Link to="tiktokviewpredictor"><button>tiktok view predictor</button></Link>
            </div>

            <Routes>
                <Route path="basketbin" element={<BasketBin />} />
                <Route path="academates" element={<Academates />} />
                <Route path="tiktokviewpredictor" element={<TikTokViewPredictor />} />
            </Routes>

        </div>
        </div>
    );
};

export default Miscellaneous;