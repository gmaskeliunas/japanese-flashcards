import { ChakraProvider } from "@chakra-ui/react";
import CardContainer from "./components/CardContainer";
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <main>
        <CardContainer />
      </main>
    </ChakraProvider>
  );
}

export default App;
