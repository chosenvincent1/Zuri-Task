import React from 'react';
import Avatar from '@mui/material/Avatar';
import { FaGithub } from "react-icons/fa";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='Header'>
        <img src='./images/share.png' className='share-icon' />
        <img src='./images/dots.png' className='dot-icon' />
        <div className='profile-container'>
          <Avatar
            alt="Chosen Vincent" 
            src="./images/chosen.jpg" className='avatar'
            sx={{width: 70, height: 70}}
          />
          <h3 className='username'>Chosen Vincent</h3>
        </div>
      </header>

      <main className='Main'>
        <div className='link-container'>
          <button><a href='https://www.twitter.com/chosenvincent1'>Twitter Link</a></button>
          <button><a href='https://training.zuri.team'>Zuri Team</a></button>
          <button><a href='http://books.zuri.team'>Zuri Book</a></button>
          <button><a href='https://books.zuri.team/python-for-beginners?ref_id=Chosen'>Python Book</a></button>
          <button><a href='http://background.zuri.team'>Background Check for Coder</a></button>
          <button><a href='https://books.zuri.team/design-rules'>Design Book</a></button>
        </div>
      </main>

      <section className='media-container'>
        <a href='https://app.slack.com/client/T042F7V19Q8/D04882F71F0?cdn_fallback=1'>
          <img 
            src='./images/slack.png'
            alt='slack' 
            className='slack' 
          />
        </a>
        <a href='https://github.com/chosenvincent1'>
          <FaGithub 
            className='github'
          />
        </a>
      </section>

      <footer className="Footer">
        <div className='footer-container'>
          <img 
            src="./images/zuri.png" 
            alt="Zuri Logo" 
            className='zuri' 
          />

          <p className='text'>HNG Internship 9 Frontend Task</p>

          <img 
            src='./images/ingressive.png' 
            alt='ingressive' 
            className='ingressive' 
          />
        </div>
      </footer>
    </div>
  );
}

export default App;
