import React from 'react';
import './styles/Post.css'; 

const Create = ({ title, content, author, imageUrl }) => {
    return (
        <div className="post">
          <div className="post-header">
            <div className="author-profile">
              <img src='https://i.pinimg.com/originals/75/b3/d2/75b3d2176c3d9aadfb0a327614341d06.jpg' alt="Author Profile" className="author-image" />
              <p className="author-name">Timothee Chalamet</p>
            </div>
            <h2>The History of computer science</h2>
          </div>
          <img src='https://th.bing.com/th/id/OIP.12EF2ArY4N0MSM54laqd0gHaFG?rs=1&pid=ImgDetMain' alt="Post" className="post-image" />
          <p className="content">From 140 characters to a global conversation powerhouse, Twitter's growth has...</p>
        </div>
      );
    };


export default Create;