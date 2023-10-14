import { Container } from 'semantic-ui-react';
import { ProjectCard } from '../project/ProjectCard';

export const HomePageProjectsContainer = () => {
  return (
    <Container>
      <div
        style={{
          textAlign: 'left',
          marginLeft: '100px',
          marginRight: '100px',
        }}
      >
        <span style={{ fontSize: '34px', fontWeight: 'bold' }}>
          <p>Projects</p>
        </span>
        <ProjectCard name="lambda" />
        <ProjectCard name="kyleuniversities.com" />
      </div>
    </Container>
  );
};
