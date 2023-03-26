import { ChakraProvider } from "@chakra-ui/react";
import CardContainer from "./components/CardContainer";
import './App.css';
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kanji Flashcards</title>
        <link rel="canonical" href="https://gmaskeliunas.github.io/japanese-flashcards/" />
        <meta name="description" content="Kanji flashcard app" />
      </Helmet>
      <main>
        <CardContainer />
      </main>
    </div>
  );
}

export default App;
