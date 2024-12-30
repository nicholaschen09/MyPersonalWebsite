import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="center-wrapper"></div>
            <nav>
                <ul className="navbar">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </nav>
            <div className="home">
                <h1>hi, my name is nicholas chen.</h1>
                <p>welcome to my personal website. here is everything from my brain dumped onto a screen.</p>
            </div>
        </div>
    );
};

export default Home;