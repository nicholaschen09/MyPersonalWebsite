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
            <h1>Design Projects</h1>
            <p>All my artistic and creative projects.</p>
            <div className="engineering">
                <Link to="voluntrack" className="fixed-button">VolunTrack</Link>
            </div>
            <Routes>
                <Route path="voluntrack" element={<VolunTrack />} />
            </Routes>
        </div>
    );
};

export default Design;