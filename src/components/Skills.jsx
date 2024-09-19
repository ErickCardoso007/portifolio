import styled from 'styled-components';

const SkillsContainer = styled.section`
  background: #f4f4f4;
  padding: 60px 20px;
  text-align: center;
`;

const SkillsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const SkillItem = styled.li`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 150px;
  text-align: center;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: #61dafb;
    color: white;
    transform: scale(1.05);
  }
`;

const Skills = () => (
  <SkillsContainer id="skills">
    <SkillsTitle>Minhas Habilidades</SkillsTitle>
    <SkillList>
      <SkillItem>React</SkillItem>
      <SkillItem>Node.js</SkillItem>
      <SkillItem>TypeScript</SkillItem>
      <SkillItem>Styled Components</SkillItem>
      <SkillItem>PostgreSQL</SkillItem>
    </SkillList>
  </SkillsContainer>
);

export default Skills;
