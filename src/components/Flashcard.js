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
          <Heading align={"center"} p={"4"} color="black" as='h1' size='4xl'>{kanji}</Heading> :
          <Heading align={"center"} p={"4"} color="black" as='h1' size='4xl'>{kanji}</Heading>
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