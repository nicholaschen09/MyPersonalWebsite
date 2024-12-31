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
            <Link to="basketbin"><button>basketbin</button></Link>
            <h1>miscellaneous projects </h1>
            <p>all my random projects.</p>
            <Routes>
                <Route path="blog" element={<Blog />} />
        </div>
    );
};

export default Miscellaneous;