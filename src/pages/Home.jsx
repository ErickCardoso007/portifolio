import styled, { keyframes } from 'styled-components';
import { scroller } from 'react-scroll';
import ContactCard from '../components/ContactCard'; 
import PrimaryButton from '../components/PrimaryButton';

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(5px);
  }
`;

const HomeContainer = styled.section`
  height: 87vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  color: white;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
`;

const Title = styled.h1`
  color: #111;
  letter-spacing: 2.9px;
  font-family: 'Source Sans Pro', sans-serif;
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 800;
  z-index: 2;
`;

const Paragraph = styled.p`
  color: #333;
  font-size: 1.2rem;
  line-height: 1.8;
  width: 80%;
  max-width: 800px;
  margin: 20px auto;
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px; 
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  .arrow {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 10px solid #333;
    animation: ${bounce} 1.5s infinite;
  }

  .text {
    margin-top: 5px;
    font-size: 0.8rem;
    color: #333;
    animation: ${pulse} 2s infinite;
  }
`;


const Home = () => {
  const scrollToNextSection = () => {
    scroller.scrollTo('about', {
      smooth: true,
      offset: -70,
    });
  };

  const scrollToProjects = () => {
    scroller.scrollTo('projects', {
      smooth: true,
      offset: -70,
    });
  };

  return (
    <HomeContainer id="home">
      <Title>Hey, I am Erick Cardoso!</Title>
      <Paragraph>
        A result-oriented web developer building and managing websites and web applications that lead to the success of the overall product.
      </Paragraph>
      <PrimaryButton nameButton="PROJECTS" scrollToSection={scrollToProjects} />
      <ScrollIndicator onClick={scrollToNextSection}>
        <div className="arrow"></div>
        <div className="text">Scroll Down</div>
      </ScrollIndicator>
      <ContactCard
        image="url_to_your_image"
        name="Erick Cardoso"
        links={{
          linkedin: "https://www.linkedin.com/in/erickcardosozz/",
          email: "mailto:youremail@example.com",
          whatsapp: "https://wa.me/5551997025784",
        }}
      />
    </HomeContainer>
  );
};

export default Home;
