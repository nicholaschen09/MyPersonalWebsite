import React from 'react';
import './Home.css';
import './Background.css'

const Home = () => {
    return (
        <div className="background">
            <div className="home">
                <h1>hi, my name is nicholas chen</h1>
                <p>welcome to my personal website. here is everything from my brain dumped onto a screen.</p>
                <div className="fixed-buttons">
                    <nav>
                        <ul className="horizontal-menu">
                            <li>
                                <Link to="/" style={linkStyle}>Home</Link>
                            </li>
                            <li>
                                <Link to="/about" style={linkStyle}>About</Link>
                            </li>
                            <li>
                                <Link to="/projects" style={linkStyle}>Projects</Link>
                            </li>
                            <li>
                                <Link to="/blog" style={linkStyle}>Blogs</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Home;