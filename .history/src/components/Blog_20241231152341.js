import React from 'react';
import './Blog.css';

const Blog = () => {
    const handleGoBack = () => {
        window.history.back();
    };
    return (
        <div className="blog">
            <h1>blogs</h1>
            <p>blog.</p>
        </div>
    );
};

export default Blog;