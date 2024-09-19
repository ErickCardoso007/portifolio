import styled from 'styled-components';

const HeroContainer = styled.section`
  height: 100vh;
  background: url('https://source.unsplash.com/random/1920x1080') no-repeat center center/cover;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-top: 10px;
`;

const HeroSection = () => (
  <HeroContainer id="hero">
    <Title>Erick Cardoso</Title>
    <Subtitle>Desenvolvedor Web | Criativo e Apaixonado por Tecnologia</Subtitle>
  </HeroContainer>
);

export default HeroSection;
