import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './components/About.js';
import Home from './components/Home.js';
import Projects from './components/Projects.js';
import Blog from './components/Blog.js';
import Miscellaneous from './components/Miscellaneous.js';
import Design from './components/Design.js';
import Engineering from './components/Engineering.js';
import BasketBin from './components/BasketBin.js';
import './App.css'; // Import the CSS file

function App() {
  const linkStyle = {
    color: 'rgba(255, 0, 144, 0.733)', // Define the color style for links
  };
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/blog" style={linkStyle}>Blog</Link>
            </li>
            <li>
              <Link to="/about" style={linkStyle}>About</Link>
            </li>
            <li>
              <Link to="/projects" style={linkStyle}>Projects</Link>
            </li>
            <li>
              <Link to="/blog" style={linkStyle}>Hom</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/projects/engineering/basketbin" element={<BasketBin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;