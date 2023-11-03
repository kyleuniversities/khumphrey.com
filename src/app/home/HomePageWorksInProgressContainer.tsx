import { MultiLineBreak } from '../../common/util/js/line';
import { ProjectCard } from '../project/ProjectCard';
import { AnimationSwitch, HomePageTransitionContainer } from './HomePage';

export const HomePageWorksInProgressContainer = (
  props: AnimationSwitch
): JSX.Element => {
  return (
    <HomePageTransitionContainer
      height="auto"
      animation="slide left"
      isAnimating={props.isAnimating}
      timeout={5700}
    >
      <div
        style={{
          textAlign: 'left',
          marginLeft: '100px',
          marginRight: '100px',
        }}
      >
        <span style={{ fontSize: '34px', fontWeight: 'bold' }}>
          <p>Works in Progress</p>
        </span>
        <MultiLineBreak lines={1} />
        <ProjectCard name="full-stack-certificate" />
        <ProjectCard name="art-villa" />
        <ProjectCard name="quizzical" />
        <MultiLineBreak lines={5} />
      </div>
    </HomePageTransitionContainer>
  );
};
