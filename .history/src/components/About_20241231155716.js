import React from 'react';
import './About.css';

const About = () => {
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <div>
            <button className="back-button" onClick={handleGoBack}>
                Back
            </button>
            <div className="about">
                <h1>about me</h1>
                <div className="about-content">
                    <p>hi, i'm nic!</p>
                    <p>i'm studying systems design engineering at the university of waterloo.</p>
                    <p>my email is n224chen@uwaterloo.ca</p>
                    <p>resume available upon request.</p>
                    <p>
                        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </p>
                    <p>
                        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </p>
                    <p>
                        <a href="https://your-art-website.com" target="_blank" rel="noopener noreferrer">Art Website</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;