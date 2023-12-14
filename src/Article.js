import React from 'react';
import './styles/Article.css';

const Article = () => {
  return (
    <div className="article-list">
      <div className="article">
      
        <img
          src="https://th.bing.com/th/id/R.39ba8b51b113aae374681551e94856b9?rik=BJ8M90W%2bASKMVw&riu=http%3a%2f%2fwww.indiamike.com%2ffiles%2fimages%2f98%2f24%2f07%2fsandakphu.jpg&ehk=AcELKMMsOspILnORYwMqX5LzkE67Cz16wPzPRgEfiZs%3d&risl=&pid=ImgRaw&r=0" // Replace with your image source
          alt="Article Image"
        />
        <h2>What if famous brands had regular fonts?</h2>
        <p>Author</p>
      </div>
      <div className="article">
      
        <img
          src="https://th.bing.com/th/id/OIP.f5dIKJ9m8ZaIHT3QAiR9jAHaE8?w=1920&h=1280&rs=1&pid=ImgDetMain" // Replace with your image source
          alt="Article Image"
        />
        <h2>Finance and Investment Elite Social Mixer @Lujaizua</h2>

        <p>Author</p>
      </div>
    </div>
  );
};

export default Article;
