import React from 'react';
import './Home.css';
import './Background.css'

const Home = () => {
    return (
        <div className="home">
            <h1>hi, my name is nicholas chen</h1>
            <p>welcome to my personal website. here is everything from my brain dumped onto a screen.</p>
            <Link to="/about" className="fixed-button">About</Link>
            <Link to="/projects" className="fixed-button">Projects</Link>
            <Link to="/blog" className="blogs">Blog</Link>
        </div>
    );
};

export default Home;