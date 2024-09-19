import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 60px 20px;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`;

const About = () => (
  <AboutContainer id="about">
    <AboutTitle>Sobre Mim</AboutTitle>
    <AboutText>
      Olá, sou Erick Cardoso, um desenvolvedor web jovem e entusiasta de tecnologia. Estou sempre buscando
      aprender novas habilidades e criar soluções criativas e inovadoras. Adoro desafios e estou aqui para
      transformar ideias em realidade!
    </AboutText>
  </AboutContainer>
);

export default About;
