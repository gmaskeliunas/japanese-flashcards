// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Flashcard = ({ kanji, furigana, translation, number, totalNumber, isToggledValue, isFinishedValue }) => {
  return (
    <div className="app__flashcard-wrapper">
      {!isFinishedValue &&
      <div>
        <div className="app__flashcard-container">
          {isToggledValue ?
            <p className="app__flashcard-kanji">{kanji}</p> :
            <p className="app__flashcard-kanji">{kanji}</p>
          }
          {isToggledValue ? <p className="app__flashcard-translation">{kanji}【{furigana}】: {translation}</p> : null}
        </div>
      </div>
      }
      {!isFinishedValue &&
      <div className="app__flashcard-counter">
        <p >{number}/{totalNumber}</p>
      </div>
      }
      {isFinishedValue &&
        <div>
          <div>
            <h1 className="app__flashcard-finished_header">Finished!</h1>
            <button className="app__flashcard-finished_button">Restart</button>
          </div>
        </div>
      }
    </div>
  );
};

export default Flashcard;