import React from 'react';
import './Miscellaneous.css';
import './Photography' from

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
                </Routes>
        </div>
    );
};

export default Miscellaneous;