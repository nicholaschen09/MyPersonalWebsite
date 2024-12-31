import React from 'react';
import './Home.css';
import './Background.css'

const Home = () => {
    return (
        <div className="home">
            <h1>hi, my name is nicholas chen</h1>
            <p>welcome to my personal website. here is everything from my brain dumped onto a screen.</p>
            <div className="projects-container">
                <Link to="basketbin"><button>basketbin</button></Link>
                <Link to="academates"><button>academates</button></Link>
                <Link to="projects"><button>projects</button></Link>
            </div>
        </div>
    );
};

export default Home;