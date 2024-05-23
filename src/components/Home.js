// src/components/Home/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <h1>hi, my name is nicholas chen. </h1>
            <p>welcome to my personal website. here is everything from my brain dumped onto a screen.</p>
            <img src={process.env.PUBLIC_URL + '/DSCN3098_2.jpg'}alt="DinnerImage" className="DinnerImage" />

            <h1> i am...</h1>
            <p> * going to be studying systems design engineering @ university of waterloo in the fall</p>
            <p> * making content that focuses on providing education and advice through social media platforms such as tiktok and instagram</p>
            <p> * going to be doing an internship @ RBC as an innovation developer this summer</p>

            <h1>i have...</h1>
            <p>* done a ux design internship @ meta hash capital </p>
            <p>* ran a programming club as vp for students at my high school </p>
            <p>* ran a fundraiser club called medlife as president which has raised $250+ since i joined </p>
            <p>* designed and illustrated a book cover called "realms colliding" for the author</p>
            <p>* participated in multiple hackathons such as jamhacks, hackthevalley, and uofthacks </p>
            <p>* worked at various fast food chains such as teriyaki experience, dairy queen, and taro's fish </p>
        </div>
        );

        
    
    };
         <div className="column">
         <h1>work experience</h1>
         </div>
   

export default Home;