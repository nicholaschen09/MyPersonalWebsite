import React from 'react';
import './Solidworks.css';

const Solidworks = () => {
    const handleGoBack = () => {
        window.history.back();
    };
    return (
        <div> <button className="back-button" onClick={handleGoBack}>
            Back
        </button>
            <div className="solidworks">
                <h1>portfolio</h1>
                
                <p>This is a detailed description of my SolidWorks project.</p>
                <p>Here you can add more information about the project, images, videos, etc.</p>
            </div>
        </div>
    );
};

export default Solidworks;