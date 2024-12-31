import React from 'react';
import './About.css';
import githubLogo from './githubLogo.png';
import linkedinLogo from './linkedinLogo.png';
import

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
                    <div className="social-links">
                        <a href="https://github.com/nicholaschen09" target="_blank" rel="noopener noreferrer">
                            <img src={githubLogo} alt="GitHub" className="social-icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/nicholas-chen-85886726a/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;