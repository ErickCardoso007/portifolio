/* eslint-disable react/no-unescaped-entities */

import styled from 'styled-components';
import { scroller } from 'react-scroll';
import PrimaryButton from '../components/PrimaryButton';

const Container = styled.section`
  padding: 50px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px; 
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); /* Sombreamento leve */
   &::after {
    content: '';
    display: block;
    width: 25px; 
    height: 4px; 
    background-color: #1d7874; 
    margin: 10px auto 0; 
    border-radius: 2px; 
  }
`;

const Subtitle = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 20px; 
  position: relative;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 50px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const TextSection = styled.div`
  flex: 1;
  max-width: 600px;
  padding: 20px;
`;

const Heading = styled.h3`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #444;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px; /* Ajustado para maior espaçamento */
`;

const Highlight = styled.span`
  font-weight: bold;
  color: #6c63ff;
`;

const SkillsSection = styled.div`
  text-align: center;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const SkillsTitle = styled.h4`
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #444;
  width: 100%;
`;

const Skill = styled.div`
  background-color: #e8e8e8;
  padding: 10px 15px;
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  white-space: nowrap;
  transition: background-color 0.3s; /* Efeito de transição suave */
  
  &:hover {
    background-color: #d0d0d0; /* Efeito hover */
  }
`;

const AboutSection = () => {
  const scrollToContact = () => {
    scroller.scrollTo('contact', {
      smooth: true,
      duration: 500,
      offset: -80,
    });
  };

  return (
    <Container>
      <Title>About Me</Title>
      <Subtitle>
        Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.
      </Subtitle>
      <Content>
        <TextSection>
          <Heading>Get to know me!</Heading>
          <Paragraph>
            I'm a <Highlight>frontend-focused web developer</Highlight> dedicated to creating and managing the frontend of websites and web applications. My goal is to ensure the overall success of each product I work on.
          </Paragraph>
          <Paragraph>
            I'm eager to explore new job opportunities where I can leverage my skills and contribute to impactful projects. If you have an opportunity or would like to discuss potential collaborations, please don't hesitate to reach out.
          </Paragraph>
          <PrimaryButton nameButton="CONTACT" onClick={scrollToContact} />
        </TextSection>
        <SkillsSection>
          <SkillsTitle>My Skills</SkillsTitle>
          <Skill>HTML</Skill>
          <Skill>CSS</Skill>
          <Skill>React</Skill>
          <Skill>Node</Skill>
          <Skill>Sass</Skill>
          <Skill>Angular</Skill>
          <Skill>PostgreSQL</Skill>
          <Skill>Storybook</Skill>
          <Skill>Styled-components</Skill>
          <Skill>Responsive Design</Skill>
          <Skill>Figma</Skill>
          <Skill>Git</Skill>
          <Skill>GitHub</Skill>
        </SkillsSection>
      </Content>
    </Container>
  );
};

export default AboutSection;
