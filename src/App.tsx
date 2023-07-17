import { AppRouter } from "AppRouter";
import React from "react";

import { BrowserRouter } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";
import { StoreContextProvider } from "Contex";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <StoreContextProvider>
          <AppRouter />
        </StoreContextProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
