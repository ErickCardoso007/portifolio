import styled from 'styled-components';

const ProjectsContainer = styled.section`
  padding: 60px 20px;
  text-align: center;
`;

const ProjectsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
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
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: #61dafb;
    color: white;
    transform: scale(1.05);
  }
`;

const Projects = () => (
  <ProjectsContainer id="projects">
    <ProjectsTitle>Meus Projetos</ProjectsTitle>
    <ProjectList>
      <ProjectItem>
        <h3>Projeto 1</h3>
        <p>Descrição do Projeto 1.</p>
      </ProjectItem>
      <ProjectItem>
        <h3>Projeto 2</h3>
        <p>Descrição do Projeto 2.</p>
      </ProjectItem>
    </ProjectList>
  </ProjectsContainer>
);

export default Projects;
