import styled from 'styled-components';

const ProjectsContainer = styled.section`
  padding: 60px 20px;
  text-align: center;
  background-color: #f7f7f7; /* Um fundo suave para destacar os projetos */
`;

const ProjectsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #333; /* Cor do título */
`;

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const ProjectItem = styled.li`
  background: #ffffff; /* Cor de fundo branca */  
  border: 1px solid #ddd; /* Borda suave */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  transition: background 0.3s, transform 0.3s;
  color: #333; /* Cor do texto */

  &:hover {
    background: #808080;/* Cor de fundo ao passar o mouse */
    color: #000; /* Cor do texto ao passar o mouse */
    transform: scale(1.05);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #222; /* Um tom escuro para o título do projeto */
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #555; /* Cor do texto da descrição */
`;

const Projects = () => (
  <ProjectsContainer id="projects">
    <ProjectsTitle>My Projects</ProjectsTitle>
    <ProjectList>
      <ProjectItem>
        <ProjectTitle></ProjectTitle>
        <ProjectDescription>empty</ProjectDescription>
      </ProjectItem>
      <ProjectItem>
        <ProjectTitle></ProjectTitle>
        <ProjectDescription>empty</ProjectDescription>
      </ProjectItem>
      <ProjectItem>
        <ProjectTitle></ProjectTitle>
        <ProjectDescription>empty</ProjectDescription>
      </ProjectItem>
    </ProjectList>
  </ProjectsContainer>
);

export default Projects;
