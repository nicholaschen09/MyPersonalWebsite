import React from 'react';
import './About.css';
import githubLogo from './githubLogo.png';
import linkedinLogo from './linkedinLogo.png';
import ArtWebsiteLogo from './ArtWebsiteLogo.jpg';

const About = () => {
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <div>
            <button className="back-button" onClick={handleGoBack}>
                Back
            </button>
            <div className="about">
                <h1>about me</h1>
                <div className="about-content">
                    <p>hi, i'm nic!</p>
                    <p>i'm studying systems design engineering at the university of waterloo.</p>
                    <p>my email is n224chen@uwaterloo.ca</p>
                    <p>resume available upon request.</p>
                    <div className="social-links">
                        <a href="https://github.com/nicholaschen09" target="_blank" rel="noopener noreferrer">
                            <img src={githubLogo} alt="GitHub" className="social-icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/nicholas-chen-85886726a/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
                        </a>
                        <a href="https://nicholaschen243.wixsite.com/nicholas-chen" target="_blank" rel="noopener noreferrer">
                            <img src={ArtWebsiteLogo} alt="Art Website" className="social-icon" />
                        </a>
                    </div>
                </div>
                <div className="bordered-section">
                    <div className="education">
                        <h2>education</h2>
                        <p>University of Waterloo</p>
                        <p>Bachelor of Applied Science in Systems Design Engineering</p>
                        <p>Expected Graduation Date: May 2029</p>
                        <p>Waterloo, Ontario</p>
                        <ul>
                            <li>President’s Scholarship of Distinction worth $5000</li>
                            <li>Relevant Courses: Introduction to Design, Digital Computation, Elementary Engineering Math, Visual Communications</li>
                        </ul>
                    </div>
                    <div className="skills">
                        <h2>technical skills</h2>
                        <p><strong>Languages:</strong> Python, Java, C++, HTML/CSS, JavaScript, Kotlin, SQL, MATLAB</p>
                        <p><strong>Developer Tools:</strong> VS Code, Eclipse, Android Studio, IntelliJ, Jupyter Notebook</p>
                        <p><strong>Technologies/Frameworks:</strong> GitHub, Firebase, React, React Native, Node.js, Flask, Numpy, Pandas, MongoDB, PyTorch, TensorFlow</p>
                        <p><strong>Design:</strong> Figma, Procreate, Adobe, SOLIDWORKS, AutoCAD, Fusion 360</p>
                    </div>
                    <div className="experience">
                        <h2>experience</h2>
                        <h3>Royal Bank of Canada</h3>
                        <p>Innovation Developer Intern | July 2024 – August 2024 | Toronto, Ontario</p>
                        <ul>
                            <li>Developed a machine learning model using linear regression in Python with NumPy and Pandas to predict the volume of monthly sign-ins, enabling better resource allocation within the support team.</li>
                            <li>Reduced support team work times by 30% by accurately forecasting when 2 million customers would bank online.</li>
                            <li>Identified potential cost savings of over $50,000 annually by predicting and preemptively managing peak support periods, reducing the need for overtime and additional resources.</li>
                        </ul>
                        <h3>Meta Hash Capital</h3>
                        <p>UX Design Intern | March 2023 – August 2023 | Markham, Ontario</p>
                        <ul>
                            <li>Collaborated closely with cross-functional teams to develop a comprehensive design system, streamlining the design-to-development process and reducing production time by 25%.</li>
                            <li>Designed and iterated on wireframes, prototypes, and high-fidelity mockups for both web and mobile applications using Figma and Adobe Creative Suite, ensuring a cohesive user experience across platforms.</li>
                            <li>Led user research initiatives, including surveys and interviews, gathering user needs and preferences for designs.</li>
                            <li>Conducted usability testing sessions, which resulted in a 20% increase in user satisfaction and better user interface.</li>
                        </ul>
                    </div>
                    <div className="projects">
                        <h2>projects</h2>
                        <h3>BasketBin @ Hack the 6ix Hackathon</h3>
                        <p>Python, HTML, C++, JavaScript, CSS | August 2024</p>
                        <ul>
                            <li>Built a garbage sorter with hardware including sensors and servos connected to an ESP32 microcontroller.</li>
                            <li>Developed a Python program integrating with hardware, utilizing a trained computer vision model with Flask to classify waste, achieving 90% accuracy in recycling detection.</li>
                            <li>Implemented a leaderboard and user management system using Supabase, HTML, and CSS, leading to a 15% increase in recycling participation.</li>
                        </ul>
                        <h3>Academates @ Waterloo’s Jamhacks 7 Hackathon</h3>
                        <p>JavaScript, CSS, SCSS, HTML | May 2023</p>
                        <ul>
                            <li>Created an app similar to Discord for school and homework help, using JavaScript, HTML, CSS, and SCSS.</li>
                            <li>Implemented Firebase OAuth for easy sign-up and login, achieving a 25% increase in active users over six months.</li>
                            <li>Designed each screen using Figma, improving user engagement by 40% through intuitive interface design.</li>
                        </ul>
                    </div>
                    <div className="extracurriculars">
                        <h2>extracurriculars</h2>
                        <h3>Social Media</h3>
                        <p>Content Creator | Personal Brand | May 2023 – Present</p>
                        <ul>
                            <li>Gained over 30k followers and amassed over 8 million views by delivering high-quality, informative content on YouTube, Instagram, and TikTok related to engineering and academia.</li>
                            <li>Collaborated with over 12 brands in technology and engineering, earning over $1000 due to strong personal branding.</li>
                            <li>Engaged with a diverse audience providing study tips, notes, and advice, reaching over 1 million online users worldwide.</li>
                        </ul>
                        <h3>University of Waterloo Alternative Fuels Team</h3>
                        <p>Design Team Member | September 2024 – Present | Waterloo, Ontario</p>
                        <ul>
                            <li>Collaborated on a multidisciplinary team of over 20 members, working as an electrical and mechanical engineer to develop sustainable fuel technologies for vehicles, achieving a 12% increase in fuel efficiency.</li>
                            <li>Assisted in designing and prototyping fuel-efficient systems, contributing to a 20% improvement in system reliability through over 50 hours of modeling, simulation, and analysis using SOLIDWORKS and AutoCAD.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;