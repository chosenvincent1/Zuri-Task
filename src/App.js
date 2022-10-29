import React from 'react';
import Avatar from '@mui/material/Avatar';
import { FaShare } from "react-icons/fa";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='Header'>
        <FaShare className='share-icon' />
        <div className='profile-container'>
          <Avatar 
            alt="Chosen Vincent" 
            src="./images/chosen.jpg" className='avatar'
            sx={{width: 80, height: 80}}
          />
          <h3 className='username'>Chosen Vincent</h3>
        </div>
      </header>

      <main className='Main'>
        <div className='link-container'>
          <button>Twitter Link</button>
          <button>Zuri Team</button>
          <button>Zuri Book</button>
          <button>Python Book</button>
          <button>Background Check for Coder</button>
          <button>Design Book</button>
        </div>
      </main>

      <section className='media-container'>
        <img 
          src='logo512.png' 
          alt='slack' 
          className='slack' 
        />
        <img 
          src='logo512.png' 
          alt='github' 
          className='github' 
        />
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
