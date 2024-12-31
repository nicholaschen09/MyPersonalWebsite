import React from 'react';
import './Photography.css';

const Photography = () => {
    const handleGoBack = () => {
        window.history.back();
    };
    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        // Add more image paths here
    ];

    return (
        <div> <button className="back-button" onClick={handleGoBack}>
            Back
        </button>
            <div className="photography">
                <h1>My Photography</h1>
                <div className="image-gallery">
                    {images.map((image, index) => (
                        <div key={index} className="image-container">
                            <img src={image} alt={`Photography ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Photography;