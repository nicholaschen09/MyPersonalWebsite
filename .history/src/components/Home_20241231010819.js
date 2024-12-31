import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import './Background.css';

const Home = () => {
    return (
        <div className="background">
            <div className="home">
                <h1>Hi, my name is Nicholas Chen</h1>
                <p>Welcome to my personal website. Here is everything from my brain dumped onto a screen.</p>
                <div className="fixed-buttons">
                    <Link to="/about" className="fixed-button">About</Link>
                    <Link to="/projects" className="fixed-button">Projects</Link>
                    <Link to="/blog" className="fixed-button">Blog</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;