import { Button, Container, Image } from 'semantic-ui-react';
import {
  AnimationSwitch,
  HomePageTransitionContainer,
  STATIC_ANIMATION,
} from './HomePage';
import { MultiLineBreak } from '../../common/util/js/line';
import { useNavigate } from 'react-router';
import { ConditionalContent } from '../ConditionalContent';

export const HomePageReplayContainer = (props: {
  isDynamic: boolean;
}): JSX.Element => {
  const navigate = useNavigate();
  return (
    <Container>
      <HomePageTransitionContainer
        height="auto"
        animation="slide left"
        isAnimating={props.isDynamic}
        timeout={2750}
      >
        <div
          style={{
            textAlign: 'left',
            marginLeft: '100px',
            marginRight: '100px',
          }}
        >
          <p>
            <span style={{ fontSize: '34px', fontWeight: 'bold' }}>
              Want to See Everything Replay Again?
            </span>
            <br />
            <br />
            <span style={{ lineHeight: '150%', fontSize: '27px' }}>
              Want to see everything slide in again? Click the button below to
              refresh the animation!
            </span>
          </p>
          <Button
            color="blue"
            content="Replay"
            onClick={() => {
              navigate('/');
              window.location.reload();
            }}
          />
          <MultiLineBreak lines={10} />
        </div>
      </HomePageTransitionContainer>
    </Container>
  );
};
