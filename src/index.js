import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// Provider의 props로 theme 전달 
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "orange.50",
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}> 
      <App />
    </ChakraProvider>    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
