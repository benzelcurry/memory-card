import React, { useState, useEffect } from 'react';
import '../stylesheets/Cards.css';

const Cards = () => {
  let [score, setScore] = useState(0);
  let [best, setBest] = useState(0);
  let [cardArr, setCardArr] = useState([{}]);
  let [cards, setCards] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false
  });

  const hasBeenClicked = (value) => {
    let obj = cards;
    
    if (obj[value] === false) {
      obj[value] = true;
      setCards(obj);
      return false;
    } else {
      return true;
    }
  }

  const handleClick = (e) => {
    let stopBest = false;

    if (hasBeenClicked(Number(e.target.id))) {
      setScore(0);
      stopBest = true;
    } else {
      setScore(score + 1);
      stopBest = false;
    }

    if ((best === 0 || best <= score) && stopBest === false) {
      setBest(best + 1);
    }
  }

  return (
    <div className="body-container">
      <div className='scoreboard'>
        <div className="current">Current: {score}</div>
        <div className="best">Best: {best}</div>
      </div>
      {cardArr.map(gamecards => {
        return (
          <div className='body'>
            <div className="card" onClick={handleClick} id='1'>Card 1</div>
            <div className="card" onClick={handleClick} id='2'>Card 2</div>
            <div className="card" onClick={handleClick} id='3'>Card 3</div>
            <div className="card" onClick={handleClick} id='4'>Card 4</div>
            <div className="card" onClick={handleClick} id='5'>Card 5</div>
            <div className="card" onClick={handleClick} id='6'>Card 6</div>
            <div className="card" onClick={handleClick} id='7'>Card 7</div>
            <div className="card" onClick={handleClick} id='8'>Card 8</div>
            <div className="card" onClick={handleClick} id='9'>Card 9</div>
            <div className="card" onClick={handleClick} id='10'>Card 10</div>
            <div className="card" onClick={handleClick} id='11'>Card 11</div>
            <div className="card" onClick={handleClick} id='12'>Card 12</div>
          </div>
        )
      })}
    </div>
  )
}

export default Cards;