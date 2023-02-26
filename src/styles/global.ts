import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 24px;
      line-height: 28px;
    }
  }

  @media 
  (max-width: 720px) {
    html {
      font-size: 24px;
      line-heigth: 28px;
      background: red;
    }
  }

  body {
    font-size: 16px;
    color: #F5F5F5;
    background-color: #000;
    -webkit-font-smoothing: antialiased !important;
   
  }

  body, input, textarea, select, button {
    font: 400 1rem "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

    // Scrollbar
    ::-webkit-scrollbar {
    width: .5rem;
  }
  ::-webkit-scrollbar-track {
    background: red;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: #F0A500;
    border-radius: 4px;
  }
`;
