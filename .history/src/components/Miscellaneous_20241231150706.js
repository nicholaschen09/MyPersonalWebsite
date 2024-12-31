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
        </div>
    );
};

export default Miscellaneous;