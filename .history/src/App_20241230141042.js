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
              <Link to="/" style={linkStyle}>Home</Link>
            </li>
            <li>
              <Link to="/about" style={linkStyle}>About</Link>
            </li>
            <li>
              <Link to="/projects" style={linkStyle}>Projects</Link>
            </li>
            <li>
              <Link to="/blogs" style={linkStyle}>Blogs</Link>
            
              
            <Link to="/projects/engineering/basketbin">BasketBin</Link>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/projects/miscellaneous" element={<Miscellaneous />} />
          <Route path="/projects/design" element={<Design />} />
          <Route path="/projects/engineering" element={<Engineering />} />
          <Route path="/projects/engineering/basketbin" element={<BasketBin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;