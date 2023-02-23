import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Flashcard = ({ kanji, furigana, translation, number, totalNumber, isToggledValue }) => {
  return (
    <Card w="lg" h="20rem">
      <CardBody>
      <VStack borderRadius="lg" bg="white">
        {isToggledValue ? 
          <Text align={"center"} p={"4"} color="black" as='h1' fontSize='6xl'>{kanji}</Text> :
          <Text align={"center"} p={"4"} color="black" as='h1' fontSize='6xl'>{kanji}</Text>
        }
        {isToggledValue ? <Text alignSelf={"center"} px={"4"} color="black" fontSize='3xl'>{kanji}【{furigana}】: {translation}</Text> : null}
      </VStack>
      </CardBody>
      <CardFooter>
        <Text align={"bottom"} color="black">{number}/{totalNumber}</Text>
      </CardFooter>
    </Card>
  );
};

export default Flashcard;