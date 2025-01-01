import React from 'react';
import './Photography.css';
import pic1 from './DSCN3832 2.JPG';
import pic2 from './DSCN4095.JPG';
import pic3 from './DSCN4514 2.jpg';

const Photography = () => {
    const handleGoBack = () => {
        window.history.back();
    };

    const images = [
        pic1,
        pic2,
        pic3,
        // Add more imported image paths here
    ];

    return (
        <div>
            <button className="back-button" onClick={handleGoBack}>
                Back
            </button>
            <div className="photography">
                <h1>photography</h1>
                
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