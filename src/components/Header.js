import React from 'react';
import '../stylesheets/Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='title'>Emoji Memory Game</div>
      <div className='rules'>Rules: Don't click the same card twice!</div>
    </div>
  )
}

export default Header;