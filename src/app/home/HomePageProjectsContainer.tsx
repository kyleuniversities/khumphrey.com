import { ProjectCard } from '../project/ProjectCard';
import { HomePageTransitionContainer } from './HomePage';

export const HomePageProjectsContainer = () => {
  return (
    <HomePageTransitionContainer
      height="480px"
      animation="slide left"
      timeout={3500}
    >
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
    </HomePageTransitionContainer>
  );
};
