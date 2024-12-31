import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './Design.css';
import VolunTrack from './VolunTrack';

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

            <div className="engineering">
                <div className="projects-container">
                    <Link to="voluntrack"><button>VolunTrack</button></Link>
                </div>
                <a href="/project1" className="project">VolunTrack</a>
            </div>
            <Routes>
                <Route path="voluntrack" element={<VolunTrack />} />
            </Routes>
        </div>
    );
};

export default Design;