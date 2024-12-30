import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <h1>about me</h1>
            <p>
                hi, i'm nic! </p>
            <p>i am currently studying systems design engineering at the university of waterloo.
            </p>
            <p>email: n224chen@uwaterloo.ca</p>
            <img src={process.env.PUBLIC_URL + '/file.jpg'} alt="Profile Picture" className="profilePic" />
            <p>resume available upon request.</p>
        </div>
    );
};



export default About;