import React from 'react';
import './Design.css';

const Design = () => {
    return (
        <div className="design">
            <button className="back-button" onClick={handleGoBack}>
                Back
            </button>
            <h1>design projects</h1>
            <p>all my artistic and creative projects.</p>
            <div className="projects-container">
                <a href="/project1" className="project">VolunTrack</a>
                </div>
        </div>
    );
};

export default Design;