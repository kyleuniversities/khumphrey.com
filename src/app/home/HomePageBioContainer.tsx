import { Container, Image } from 'semantic-ui-react';
import { AnimationSwitch, HomePageTransitionContainer } from './HomePage';
import { MultiLineBreak } from '../../common/util/js/line';

export const HomePageBioContainer = (props: AnimationSwitch): JSX.Element => {
  return (
    <Container>
      <HomePageBioWelcomeContainer isAnimating={props.isAnimating} />
      <HomePageBioAboutContainer isAnimating={props.isAnimating} />
    </Container>
  );
};

const HomePageBioWelcomeContainer = (props: AnimationSwitch): JSX.Element => {
  const welcome = window.location.origin + '/resources/welcome.png';
  return (
    <HomePageTransitionContainer
      height="480px"
      animation="slide left"
      isAnimating={props.isAnimating}
      timeout={500}
    >
      <Image centered src={welcome} />
    </HomePageTransitionContainer>
  );
};

const HomePageBioAboutContainer = (props: AnimationSwitch): JSX.Element => {
  return (
    <HomePageTransitionContainer
      height="auto"
      animation="slide left"
      isAnimating={props.isAnimating}
      timeout={2000}
    >
      <Container>
        <div
          style={{
            textAlign: 'left',
            marginLeft: '100px',
            marginRight: '100px',
          }}
        >
          <p>
            <span style={{ fontSize: '34px', fontWeight: 'bold' }}>
              About Me
            </span>
            <br />
            <br />
            <span style={{ lineHeight: '150%', fontSize: '27px' }}>
              &emsp;&emsp;Hi, my name is Kyle Humphrey (@kyleuniversities) and
              welcome to my website! I'm a hard worker and fast learner who
              loves to solve complex problems. I have significant experience in
              Java, ReactJS, and Python.
            </span>
          </p>
          <MultiLineBreak lines={10} />
        </div>
      </Container>
    </HomePageTransitionContainer>
  );
};
