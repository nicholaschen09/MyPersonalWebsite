import React from 'react';
import './Miscellaneous.css';
import Photography from './Photography';

const Miscellaneous = () => {
    const handleGoBack = () => {
        window.history.back();
    };
    return (
        <div className="miscellaneous">
            <button className="back-button" onClick={handleGoBack}>
                Back
            </button>
            <Link to="photography"><button>photography</button></Link>
            <h1>miscellaneous projects </h1>
            <p>all my random projects.</p>
            <Routes>
                <Route path="photography" element={< />} />
                </Routes>
        </div>
    );
};

export default Miscellaneous;