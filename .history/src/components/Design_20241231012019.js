import React from 'react';
import './Design.css';

const Design = () => {
    const handleGoBack = () => {
        window.history.back();
    };
    return (
        <div className="design">
            <button className="back-button" onClick={handleGoBack}>
                Back
            </button>
            <h1>design projects</h1>
            <p>all my artistic and creative projects.</p>
            <div className="projects-container">
                <Link to="basketbin"><button>basketbin</button></Link>
                <Link to="academates"><button>academates</button></Link>
                <Link to="tiktokviewpredictor"><button>tiktok view predictor</button></Link>
            </div>
            <div className="engineering">
                <a href="/project1" className="project">VolunTrack</a>
            </div>
        </div>
    );
};

export default Design;