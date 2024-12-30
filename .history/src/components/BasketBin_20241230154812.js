import React from 'react';
import './BasketBin.css';

const BasketBin = () => {
    return (
        <div className="center-wrapper">
            <div className="basketbin">
                <h2>BasketBin Project</h2>
                <p>Welcome to the BasketBin. This is where you'll find information about our innovative waste management solution.</p>

                <h3>About the Project</h3>
                <p>BasketBin is a smart waste management system that uses IoT technology to optimize garbage collection routes and schedules. Our goal is to make waste management more efficient, cost-effective, and environmentally friendly.</p>

                <h3>Key Features</h3>
                <ul>
                    <li>Real-time fill level monitoring</li>
                    <li>Optimized collection routes</li>
                    <li>Data analytics for waste management insights</li>
                    <li>Mobile app for users and collectors</li>
                    <li>Automated notifications for waste collection</li>
                    <li>Integration with existing waste management systems</li>
                </ul>

                <h3>GitHub Repository</h3>
                <p>You can find the source code for this project on GitHub at: <a href="https://github.com/DerrickHa/ht6" target="_blank" rel="noopener noreferrer">BasketBin Github Repository</a>.</p>

                <h3>Project Images</h3>
                <div className="image-container">
                    <img src="/images/basketbin-1.jpg" alt="BasketBin smart bin" className="project-image" />
                    <img src="/images/basketbin-2.jpg" alt="BasketBin mobile app" className="project-image" />
                </div>

                <h3>Future Plans</h3>
                <p>We have several exciting plans for the future of BasketBin, including:</p>
                <ul>
                    <li>Integration with city-wide waste management systems</li>
                    <li>Advanced AI algorithms for predictive maintenance</li>
                    <li>Expansion to more cities and regions</li>
                    <li>Partnerships with recycling companies</li>
                    <li>Development of a web portal for waste management authorities</li>
                    <li>Enhanced user interface for the mobile app</li>
                </ul>

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

                <h3>Team</h3>
                <p>Our team consists of experienced professionals in the fields of IoT, software development, and waste management. We are passionate about making a positive impact on the environment through innovative technology.</p>
                <ul>
                    <li>John Doe - Project Manager</li>
                    <li>Jane Smith - Lead Developer</li>
                    <li>Emily Johnson - IoT Specialist</li>
                    <li>Michael Brown - Data Scientist</li>
                    <li>Sarah Davis - UX/UI Designer</li>
                </ul>

                <h3>Testimonials</h3>
                <p>Here are some testimonials from our users:</p>
                <blockquote>
                    <p>"BasketBin has revolutionized the way we manage waste in our city. The real-time monitoring and optimized routes have significantly reduced our operational costs." - City Waste Management Authority</p>
                </blockquote>
                <blockquote>
                    <p>"The mobile app is user-friendly and provides all the information we need to manage our waste collection efficiently." - Waste Collection Company</p>
                </blockquote>

                <h3>Contact Us</h3>
                <p>If you have any questions or would like to get involved with the BasketBin project, please contact us at <a href="mailto:info@basketbin.com">info@basketbin.com</a>.</p>
            </div>
        </div>
    );
}

export default BasketBin;