import { createGlobalStyle } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: auto;
  }
  *, *::before, *::after {
    box-sizing: border-box; 
  }
  .slick-slider {
  margin: 0 -15px; 
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background: linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)),url(../../assets/svg/common-bg.svg);
  }
`;

export default GlobalStyle;
