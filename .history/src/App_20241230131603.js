import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function TestComponent() {
  return <div>Test Component</div>;
}

function App() {
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
          <Route path="/projects/engineering/basketbin" element={<TestComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;