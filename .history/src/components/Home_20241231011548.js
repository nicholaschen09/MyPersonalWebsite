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
            <h1>Hi, my name is Nicholas Chen</h1>
            <p>Welcome to my personal website. Here is everything from my brain dumped onto a screen.</p>
            <div className="projects-container">
                <Link to="blogs"><button>Blog</button></Link>
                <Link to="about"><button>About</button></Link>
                <Link to="projects"><button>Projects</button></Link>
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