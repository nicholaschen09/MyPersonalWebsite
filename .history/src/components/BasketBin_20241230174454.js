import React from 'react';
import './BasketBin.css';

const BasketBin = () => {
    
    return (
        <div className="center-wrapper">
            <div className="basketbin">
                <h1>basketbin</h1>
                <p>This is BasketBin. Our innovative waste management solution.</p>

                <h3>About the Project</h3>
                <p>BasketBin is a smart waste management system that uses IoT technology to optimize garbage collection routes and schedules. Our goal is to make waste management more efficient, cost-effective, and environmentally friendly.</p>

                <h3>Key Features</h3>
                <ul>
                    <li>Real-time fill level monitoring</li>
                    <li>Optimized collection routes</li>
                    <li>Data analytics for waste management insights</li>
                </ul>

                <h3>GitHub Repository</h3>
                <p>You can find the source code for this project on GitHub at: <a href="https://github.com/DerrickHa/ht6" target="_blank" rel="noopener noreferrer">BasketBin Github Repository</a>.</p>

                <h3>Project Images</h3>
                <div className="image-container">
                    <img src="/images/basketbin-1.jpg" alt="BasketBin smart bin" className="project-image" />
                    <img src="/images/basketbin-2.jpg" alt="BasketBin mobile app" className="project-image" />
                </div>

                <h3>Technical Details</h3>
                <p>The BasketBin system is built using the latest technologies to ensure reliability and scalability. Here are some of the technical details:</p>
                <ul>
                    <li>IoT sensors for real-time monitoring</li>
                    <li>Cloud-based data storage and processing</li>
                    <li>Machine learning algorithms for route optimization</li>
                    <li>RESTful API for integration with other systems</li>
                    <li>Mobile app built with React Native</li>
                    <li>Web portal built with React and Node.js</li>
                </ul>

                <h3>Contact Us</h3>
                <p>If you have any questions or would like to get involved with the BasketBin project, please contact us at <a href="mailto:info@basketbin.com">info@basketbin.com</a>.</p>
            </div>
        </div>
    );
}

export default BasketBin;