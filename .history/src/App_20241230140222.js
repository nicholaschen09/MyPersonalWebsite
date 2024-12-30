import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BasketBin from './components/BasketBin.js';

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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects/engineering/basketbin">BasketBin</Link>
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