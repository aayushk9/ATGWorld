
import React from 'react';
import './styles/App.css';
import Navbar from './Navbar';
import Images from './Images';
import PostAction from './PostAction';
import Article from './Article';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Images />
      <PostAction />  
      <Article />
    </div>
  );
}

export default App;

