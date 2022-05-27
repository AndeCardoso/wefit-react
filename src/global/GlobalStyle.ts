import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
  body {
    outline: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', Open-Sans, Helvetica, Sans-Serif;

    & ::-webkit-scrollbar {
      width: 8px;
    }

    & ::-webkit-scrollbar-thumb {
      background-color: #F2F2F2;
      border-radius: 2px;
    }
  }
`;