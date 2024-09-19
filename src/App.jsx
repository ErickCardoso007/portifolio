import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  padding-top: 60px; /* Espaço para o header fixo */
`;

const App = () => (
  <AppContainer>
    <Header />
    <HeroSection />
    <About />
    <Skills />
    <Projects />
    <Footer />
  </AppContainer>
);

export default App;
