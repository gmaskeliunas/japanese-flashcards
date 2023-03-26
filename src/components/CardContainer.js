import React from "react";
import Flashcard from "./Flashcard";
import { useState, useEffect, useRef } from "react";
import * as kanjiData from '../kanjis/kanjis.json';


const CardContainer = () => {

  const [num, setNum] = useState(0);
  const [isToggled, setIsToggled] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isRandomized, setIsRandomized] = useState(false);
  const [randomizedButtonText, setRandomizedButtonText] = useState("Randomize queue");
  const [kanjiCards, setKanjiCards] = useState(kanjiData)
  // console.log(typeof kanjiCards[0]);
  // console.log();
  // console.log();
  let shuffledArray;

  const handleClick = () => {
    if (num+1!==kanjiCards.length) {
      setNum(num+1)
      setIsToggled(!isToggled)
    }
    else {
      setNum(0)
      setIsToggled(!isToggled)
    }
  }

  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  const handleButtonRandomizedClick = () => {
    if (isRandomized === false) {
      setRandomizedButtonText("Randomize queue");
      setIsRandomized(!isRandomized);
      shuffledArray = shuffle(kanjiData);
      console.log(shuffledArray);
      kanjiCards = setKanjiCards(shuffledArray);
    }
    else {
      setRandomizedButtonText("Normalize queue");
      setIsRandomized(!isRandomized);
      console.log(kanjiCards);
      kanjiCards = setKanjiCards(kanjiData);
    }
  }

  return (
    <div className="app__card-container_wrapper">
      <p className="app__card-container_paragraph">Welcome to my project. In this website you can learn Japanese kanji meanings using flashcards, provided you know Hiragana. Here I use a simple JSON file made up of 33 kanjis and their translations.</p>
      <button onClick={handleButtonRandomizedClick} className="app__card-container_randomize-button">
        {randomizedButtonText}
      </button>
      <h1 className="app__card-container_flashcards-header">
        Flashcards {}
      </h1>
      <Flashcard
        key={kanjiCards[num].kanji}
        kanji={kanjiCards[num].kanji}
        furigana={kanjiCards[num].furigana}
        translation={kanjiCards[num].translation}
        number={num+1}
        totalNumber={kanjiCards.length}
        isToggledValue={isToggled}
        isFinishedValue={isFinished}
      />
      {isToggled === true ? <button className="app__card-container_next-button" onClick={handleClick}>Next</button> : <button className="app__card-container_show-button" onClick={() => setIsToggled(!isToggled)}>Show</button>}
    </div>
  );
};

export default CardContainer;