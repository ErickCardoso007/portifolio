import styled from 'styled-components';

const ProjectsContainer = styled.section`
  padding: 60px 20px;
  text-align: center;
  background-color: #f7f7f7;
`;

const ProjectsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #333;
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
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  transition: background 0.3s, transform 0.3s;
  color: #333;

  &:hover {
    background: #808080;
    color: #000;
    transform: scale(1.05);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #222;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #555;
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
