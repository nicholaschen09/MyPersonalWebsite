import React from 'react';
import styles from './Academates.css';

const Academates = () => {
    const handleGoBack = () => {
        window.history.back();
    };
    return (
        <div className="center-wrapper">
            <button className="back-button" onClick={handleGoBack}>
                Back
            </button>
            <div className="academates">
                <h1>academates</h1>
                <p>Welcome to the Academates project page. This is where you'll find information about our innovative school and homework help app.</p>

                <h3>About the Project</h3>
                <p>Academates is an app similar to Discord for school and homework help, using JavaScript, HTML, CSS, and SCSS.</p>

                <h3>Key Features</h3>
                <ul>
                    <li>Real-time chat for homework help</li>
                    <li>Group study sessions</li>
                    <li>Resource sharing</li>
                    <li>Mobile app for students and tutors</li>
                </ul>

                <h3>GitHub Repository</h3>
                <p>You can find the source code for this project on GitHub at: <a href="https://github.com/DerrickHa/ht6" target="_blank" rel="noopener noreferrer">Academates Github Repository</a>.</p>

                <h3>Project Images</h3>
                <div className="image-container">
                    <img src="/images/academates-1.jpg" alt="Academates app interface" className="project-image" />
                    <img src="/images/academates-2.jpg" alt="Academates chat feature" className="project-image" />
                </div>

                <h3>Jamhacks 7 Hackathon</h3>
                <p>Academates @ Waterloo’s Jamhacks 7 Hackathon</p>
                <p>JavaScript, CSS, SCSS, HTML | May 2023</p>
                <ul>
                    <li>Created an app similar to Discord for school and homework help, using JavaScript, HTML, CSS, and SCSS.</li>
                    <li>Implemented Firebase OAuth for easy sign-up and login, achieving a 25% increase in active users over six months.</li>
                    <li>Designed each screen using Figma, improving user engagement by 40% through intuitive interface design.</li>
                </ul>
            </div>
        </div>
    );
}

export default Academates;