import React, { useState, useEffect } from 'react';
import '../stylesheets/Cards.css';

const Cards = () => {
  let [score, setScore] = useState(0);
  let [best, setBest] = useState(0);

  const handleClick = (e) => {
    if (e.target.id === '6') {
      setScore(0);
    } else {
      setScore(score + 1);
    }

    if ((best === 0 || best <= score) && e.target.id !== '6') {
      setBest(best + 1);
    }

    console.log(score);
  }

  return (
    <div className="body-container">
      <div className='scoreboard'>
        <div className="current">Current: {score}</div>
        <div className="best">Best: {best}</div>
      </div>
      <div className='body'>
        <div className="card" onClick={handleClick}>Card 1</div>
        <div className="card" onClick={handleClick}>Card 2</div>
        <div className="card" onClick={handleClick}>Card 3</div>
        <div className="card" onClick={handleClick}>Card 4</div>
        <div className="card" onClick={handleClick}>Card 5</div>
        <div className="card" onClick={handleClick} id='6'>Card 6</div>
        <div className="card" onClick={handleClick}>Card 7</div>
        <div className="card" onClick={handleClick}>Card 8</div>
        <div className="card" onClick={handleClick}>Card 9</div>
        <div className="card" onClick={handleClick}>Card 10</div>
        <div className="card" onClick={handleClick}>Card 11</div>
        <div className="card" onClick={handleClick}>Card 12</div>
      </div>
    </div>
  )
}

export default Cards;