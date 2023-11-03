import { MultiLineBreak } from '../../common/util/js/line';
import { ProjectCard } from '../project/ProjectCard';
import { AnimationSwitch, HomePageTransitionContainer } from './HomePage';

export const HomePageProjectsContainer = (
  props: AnimationSwitch
): JSX.Element => {
  return (
    <HomePageTransitionContainer
      height="auto"
      animation="slide left"
      isAnimating={props.isAnimating}
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
        <ProjectCard name="docupaxx" />
        <MultiLineBreak lines={5} />
      </div>
    </HomePageTransitionContainer>
  );
};
