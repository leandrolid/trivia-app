import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      border: 0;
      outline: 0;
    }

    :root {
      --white: #fff;
      --title: #f2f3f5;
      --gray-line: #666666;
      --text: #dcdde0;
      --text-highlight: #b3b9ff;
      --background: #2e384d;
      --red: #e83f5b;
      --green: #4cd62b;
      --blue: #5965e0;
      --blue-dark: #4953b8;
    }

    body {
      background: var(--background);
      color: var(--text);
    }

    body, input, textarea, button{
      font: 400 1rem 'Roboto', sans-serif;
      font-size: 1rem;
      color: var(---text);
    }

    button {
      cursor: pointer;
    }
`;
