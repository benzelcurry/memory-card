import React, { useState, useEffect } from 'react';
import '../stylesheets/Header.css';

const Header = (props) => {
  return (
    <div className='header'>
      <div className='title'>Memory Card Game</div>
      <div className='scoreboard'>
        {/* CURRENTLY HAVE PLACEHOLDER SCORES IN APP.JS */}
        <div className='current-score'>Current: {props.current}</div>
        <div className='best-score'>Best: {props.best}</div>
      </div>
    </div>
  )
}

export default Header;