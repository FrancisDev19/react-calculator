import React from 'react';
import {
  ChakraProvider,
  extendTheme
} from '@chakra-ui/react';
import '@fontsource/poppins'
import Layout from "./Components/Layout/Layout"
import Calculator from './Components/Calculator'

const theme = extendTheme({
  colors: {
    brand: {
      blackTransparent: '#1A202C1A',
      darkGreen: '#B5D43C',
      lightGreen: '#D9EF81',
      whiteTransparent: '#E2E8F01A'
    }
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Calculator/>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
