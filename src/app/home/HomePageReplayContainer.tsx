import { Button, Container } from 'semantic-ui-react';
import {
  HomePageSectionContainer,
  HomePageTextSectionTextContainer,
  HomePageTransitionContainer,
} from './HomePage';
import { MultiLineBreak } from '../../common/util/js/line';
import { NavigateFunction, useNavigate } from 'react-router';
import './index.css';

/**
 * Home Page Component for offering to replay the slide-in animations
 */
export const HomePageReplayContainer = (props: {
  isDynamic: boolean;
}): JSX.Element => {
  const navigate = useNavigate();
  return (
    <Container>
      <HomePageTransitionContainer
        className="homeTransitionSection"
        animation="slide left"
        isAnimating={props.isDynamic}
        timeout={2750}
      >
        <HomePageSectionContainer
          title="Want to See Everything Replay Again?"
          innerLines={2}
          postLines={10}
        >
          <HomePageTextSectionTextContainer>
            Want to see everything slide in again? Click the button below to
            refresh the animation!
          </HomePageTextSectionTextContainer>
          <MultiLineBreak lines={2} />
          <ReplayButton navigate={navigate} />
        </HomePageSectionContainer>
      </HomePageTransitionContainer>
    </Container>
  );
};

/**
 * Button for replaying slide-in animations
 */
const ReplayButton = (props: { navigate: NavigateFunction }): JSX.Element => {
  return (
    <Button
      color="blue"
      content="Replay"
      onClick={() => {
        props.navigate('/master');
        window.scrollTo(0, 0);
        window.location.reload();
      }}
    />
  );
};
