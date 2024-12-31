import React from 'react';
import './About.css';

const About = () => {
    const handleGoBack = () => {
        window.history.back();
    };
    return (
        <div> <button className="back-button" onClick={handleGoBack}>
            Back
        </button>
            <div className="about">
                <h1>about me</h1>
                <p>hi, i'm nic!
                </p>
                <p>i'm studying systems design engineering at the university of waterloo.
                </p>
                <p>my email isn224chen@uwaterloo.ca</p>
                <p>resume available upon request.</p>

            </div>
        </div>
    );
};



export default About;