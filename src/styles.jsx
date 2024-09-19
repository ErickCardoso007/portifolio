import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background: #f4f4f4;
  }

  @media (max-width: 768px) {
    /* Estilos para telas menores */
    header {
      font-size: 1rem;
    }

    h1, h2, h3 {
      font-size: 1.5rem;
    }

    .container {
      padding: 10px;
    }
  }
`;

export default GlobalStyle;
