import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './Home.css';
import './Background.css';
import Blog from './Blog';
import About from './About';
import Projects from './Projects';

const Home = () => {
    return (
        <div className="home">
            <h1>hi, my name is nicholas chen</h1>
            <p>welcome to my personal website. here is everything from my brain dumped onto a screen.</p>
            <div className="section">
                <div className="homebuttons">
                    <Link to="blog"><button>Blogs</button></Link>
                    <Link to="about"><button>About</button></Link>
                    <Link to="projects"><button>Projects</button></Link>
                </div>
            </div>
            <div className="section">
                <h3>links</h3>
                <div className="lin">
                    <a href="https://github.com/nicholaschen09" target="_blank" rel="noopener noreferrer">
                        <button>GitHub</button>
                    </a>
                    <a href="https://www.linkedin.com/in/nicholas-chen-85886726a/" target="_blank" rel="noopener noreferrer">
                        <button>LinkedIn</button>
                    </a>
                    <a href="https://nicholaschen243.wixsite.com/nicholas-chen" target="_blank" rel="noopener noreferrer">
                        <button>Art Website</button>
                    </a>
                </div>
            </div>
            <Routes>
                <Route path="blog" element={<Blog />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
            </Routes>
        </div>
    );
};

export default Home;