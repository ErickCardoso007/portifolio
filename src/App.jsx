import { Element } from 'react-scroll';
import Header from './components/Header'
import About from './pages/About';
import Projects from './pages/Projects';  
import Contact from './pages/Contact';
import Home from './pages/Home';

const App = () => (
  <>
    <Header />
    <Element name="hero" id="hero">
      <Home />
    </Element>
    <Element name="about" id="about">
      <About />
    </Element>
    <Element name="projects" id="projects">
      <Projects />
    </Element>
    <Element name="contact" id="contact">
      <Contact />
    </Element>
  </>
);

export default App;
