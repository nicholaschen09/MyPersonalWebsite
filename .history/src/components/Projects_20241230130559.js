import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        <li>
          <Link to="/projects/miscellaneous">Miscellaneous Projects</Link>
        </li>
        <li>
          <Link to="/projects/design">Design Projects</Link>
        </li>
        <li>
          <Link to="/projects/engineering">Engineering Projects</Link>
        </li>
        <li>
          <Link to="/projects/basketbin">BasketBin Project</Link>
        </li>
      </ul>
    </div>
  );
};

export default Projects;

