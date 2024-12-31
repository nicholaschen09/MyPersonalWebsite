import React from 'react';
import './About.css';

const About = () => {
    return (
        <div> <button className="back-button" onClick={handleGoBack}>
            Back
        </button>
        <div className="about">
            <h1>about me</h1>
            <p>hi, i'm nic!
            </p>
            <p>i am currently studying systems design engineering at the university of waterloo.
            </p>
            <p>email: n224chen@uwaterloo.ca</p>
            <p>resume available upon request.</p> 
        </div>
    );
};



export default About;