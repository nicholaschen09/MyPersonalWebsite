import React from 'react';
import styles from './BasketBin.module.css';

const BasketBin = () => {
    return (
        <div className={styles.projectInfo}>
            <h2>About the Project</h2>
            <p>This project is a blog platform where users can read and write blogs on various topics. It is built using React and styled with CSS.</p>

            <h2>GitHub Repository</h2>
            <p>You can find the source code for this project on my <a href="https://github.com/your-username/your-repo" target="_blank" rel="noopener noreferrer">GitHub repository</a>.</p>

            <h2>Pictures</h2>
            <div className={styles.imageContainer}>
                <img src="/images/image1.jpg" alt="Description of image 1" className={styles.projectImage} />
                <img src="/images/image2.jpg" alt="Description of image 2" className={styles.projectImage} />
            </div>
        </div>
    );
}

export default BasketBin;

