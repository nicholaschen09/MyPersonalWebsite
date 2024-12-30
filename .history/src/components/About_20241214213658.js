import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <h1>About Me</h1>

            <p>
                Hi, I’m Nicholas! I am currently pursuing Systems Design Engineering at the University of Waterloo.
                I recently completed an internship as an Innovation Developer at RBC and have a background in the
                Claude Watson Visual Arts Program at Earl Haig Secondary School.
            </p>
            <p>Email: n224chen@uwaterloo.ca</p>
            <p>Thank you for visiting and learning more about me.</p>
            <img src={process.env.PUBLIC_URL + '/file.jpg'} alt="Profile Picture" className="profilePic" />
        </div>
    );
};



export default About;