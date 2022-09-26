import React, { useState } from 'react';
import '../stylesheets/Cards.css';

const Cards = () => {
  let [score, setScore] = useState(0);
  let [best, setBest] = useState(0);
  let [cardArr, setCardArr] = useState([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ]);
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

      // Makes all cards clickable again after user loses
      for (let i = 0; i < Object.keys(cards).length; i++) {
        let obj = cards;
        obj[i] = false;
        setCards(obj);
      }

    } else {
      setScore(score + 1);
      stopBest = false;
    }

    if ((best === 0 || best <= score) && stopBest === false) {
      if (best + 1 === 12) {
        alert('You win! Click another card to start over.');
      }

      setBest(best + 1);
    }

    shuffle(cardArr)
  }

  // Shuffles an array of 1-12 and then returns each index to
  // variables to be used in the JSX
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      [array[i], array[j]] = [array[j], array[i]]
    }
  }

  const emoji = (index) => {
    switch(index) {
      case 1:
        return '🤪';
      case 2:
        return '💀';
      case 3:
        return '💩';
      case 4:
        return '😈';
      case 5:
        return '🥶';
      case 6:
        return '🤠';
      case 7:
        return '👺';
      case 8:
        return '🤡';
      case 9:
        return '👁';
      case 10:
        return '💯';
      case 11:
        return '😎';
      case 12:
        return '🤢';
      default:
        break;
    }
  }

    // let [cardArr, setCardArr] = useState({
  //   1: '🤪',
  //   2: '💀',
  //   3: '💩',
  //   4: '😈',
  //   5: '🥶',
  //   6: '🤠',
  //   7: '👺',
  //   8: '🤡',
  //   9: '👁',
  //   10: '💯',
  //   11: '😎',
  //   12: '🤢'
  // });


  return (
    <div className="body-container">
      <div className='scoreboard'>
        <div className="current">Current: {score}</div>
        <div className="best">Best: {best}</div>
      </div>
      <div className='body'>
            <div className="card" onClick={handleClick} id={cardArr[0]}>{emoji(cardArr[0])}</div>
            <div className="card" onClick={handleClick} id={cardArr[1]}>{emoji(cardArr[1])}</div>
            <div className="card" onClick={handleClick} id={cardArr[2]}>{emoji(cardArr[2])}</div>
            <div className="card" onClick={handleClick} id={cardArr[3]}>{emoji(cardArr[3])}</div>
            <div className="card" onClick={handleClick} id={cardArr[4]}>{emoji(cardArr[4])}</div>
            <div className="card" onClick={handleClick} id={cardArr[5]}>{emoji(cardArr[5])}</div>
            <div className="card" onClick={handleClick} id={cardArr[6]}>{emoji(cardArr[6])}</div>
            <div className="card" onClick={handleClick} id={cardArr[7]}>{emoji(cardArr[7])}</div>
            <div className="card" onClick={handleClick} id={cardArr[8]}>{emoji(cardArr[8])}</div>
            <div className="card" onClick={handleClick} id={cardArr[9]}>{emoji(cardArr[9])}</div>
            <div className="card" onClick={handleClick} id={cardArr[10]}>{emoji(cardArr[10])}</div>
            <div className="card" onClick={handleClick} id={cardArr[11]}>{emoji(cardArr[11])}</div>
          </div>
    </div>
  )
}

export default Cards;