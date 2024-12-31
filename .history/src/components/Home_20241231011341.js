import React from 'react';
import './Home.css';
import './Background.css'

const Home = () => {
    return (
        <div className="home">
            <h1>hi, my name is nicholas chen</h1>
            <p>welcome to my personal website. here is everything from my brain dumped onto a screen.</p>
            <div className="projects-container">
                <Link to="blogs"><button>blogs</button></Link>
                <Link to="about"><button>about</button></Link>
                <Link to="projects"><button>projects</button></Link>
            </div>
            <Routes>
                <Route path="blogs" element={<Blog />} />
                <Route path="academates" element={<About />} />
                <Route path="projects" element={<TikTokViewPredictor />} />
            </Routes>
        </div>
    );
};

export default Home;