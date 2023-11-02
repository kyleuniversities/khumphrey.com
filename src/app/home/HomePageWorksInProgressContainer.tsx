import { MultiLineBreak } from '../../common/util/js/line';
import { ProjectCard } from '../project/ProjectCard';
import { HomePageTransitionContainer } from './HomePage';

export const HomePageWorksInProgressContainer = () => {
  return (
    <HomePageTransitionContainer
      height="auto"
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
          <p>Works in Progress</p>
        </span>
        <MultiLineBreak lines={3} />
        <ProjectCard name="full-stack-certificate" />
      </div>
    </HomePageTransitionContainer>
  );
};
