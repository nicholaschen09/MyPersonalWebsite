import React from 'react';
import styles from './BasketBin.css';

const BasketBin = () => {
    return (
        <div className={styles.projectInfo}>
            <h2>BasketBin Project</h2>
            <p>Welcome to the BasketBin project page. This is where you'll find information about our innovative waste management solution.</p>

            <h3>About the Project</h3>
            <p>BasketBin is a smart waste management system that uses IoT technology to optimize garbage collection routes and schedules.</p>

            <h3>Key Features</h3>
            <ul>
                <li>Real-time fill level monitoring</li>
                <li>Optimized collection routes</li>
                <li>Data analytics for waste management insights</li>
                <li>Mobile app for users and collectors</li>
            </ul>

            <h3>GitHub Repository</h3>
            <p>You can find the source code for this project on github at: <a href="https://github.com/DerrickHa/ht6" target="_blank" rel="noopener noreferrer">BasketBin Github Repository</a>.</p>

            <h3>Project Images</h3>
            <div className={styles.imageContainer}>
                <img src="/images/basketbin-1.jpg" alt="BasketBin smart bin" className={styles.projectImage} />
                <img src="/images/basketbin-2.jpg" alt="BasketBin mobile app" className={styles.projectImage} />
            </div>
        </div>
    );
}

export default BasketBin;