import React from 'react';
import './PostActions.css'; 

const PostActions = () => {
  return (
    <div className="post-actions">
      <div className="tag">All Posts</div>
      <button className="write-post-btn">Write a Post</button>
    </div>
  );
};

export default PostActions;