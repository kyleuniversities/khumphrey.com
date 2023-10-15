import { MultiLineBreak } from '../../common/util/js/line';
import { WorkInProgressCard } from '../project/WorkInProgressCard';
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
        <WorkInProgressCard name="full-stack-certificate" />
        <MultiLineBreak lines={3} />
      </div>
    </HomePageTransitionContainer>
  );
};
