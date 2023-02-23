import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Button, Heading } from "@chakra-ui/react";
import Flashcard from "./Flashcard";
import { useState, useEffect, useRef } from "react";

const kanjiCards = [
  {
    kanji: "学生",
    furigana: "がくせい",
    translation: "Student"
  },
  {
    kanji: "先生",
    furigana: "せんせい",
    translation: "Teacher"
  },
  {
    kanji: "医者",
    furigana: "いしゃ",
    translation: "Doctor"
  },
  {
    kanji: "日本",
    furigana: "にほん",
    translation: "Japan"
  },
];

const CardContainer = () => {

  const [num, setNum] = useState(0);
  const [isToggled, setIsToggled] = useState(false);

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
  return (
    <FullScreenSection
      backgroundColor="#fafafa"
      // isDarkBackground
      p={8}
      alignItems="center"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Flashcards
      </Heading>
      <Flashcard
        key={kanjiCards[num].kanji}
        kanji={kanjiCards[num].kanji}
        furigana={kanjiCards[num].furigana}
        translation={kanjiCards[num].translation}
        number={num+1}
        totalNumber={kanjiCards.length}
        isToggledValue={isToggled}
      />
      {isToggled === true ? <Button size='lg' colorScheme='blue' onClick={handleClick}>Next</Button> : <Button size='lg' colorScheme='green' onClick={() => setIsToggled(!isToggled)}>Show</Button>}
      {console.log(isToggled)}
    </FullScreenSection>
  );
};

export default CardContainer;