import React from 'react';
import './BasketBin.css';

const BasketBin = () => {
    return (
        <div className="project-info">
            <h2 key="about-project">About the Project</h2>
            <p>This project is a blog platform where users can read and write blogs on various topics. It is built using React and styled with CSS.</p>
            <h2 key="github-repo">GitHub Repository</h2>
            <p>You can find the source code for this project on my <a href="https://github.com/your-username/your-repo">GitHub repository</a>.</p>
            <h2 key="pictures">Pictures</h2>
            <img src="path/to/your/image1.jpg" alt="Description of image 1" />
            <img src="path/to/your/image2.jpg" alt="Description of image 2" />
        </div>
    );
}

export default BasketBin;