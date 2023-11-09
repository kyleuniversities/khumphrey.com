import { Container, Image } from 'semantic-ui-react';
import {
  AnimationSwitch,
  HomePageSectionContainer,
  HomePageTextSectionTextContainer,
  HomePageTransitionContainer,
  STATIC_ANIMATION,
} from './HomePage';
import './index.css';
import { getResourceUrl } from '../util/resource';

/**
 * Home Page component for introductory content
 */
export const HomePageIntroContainer = (props: AnimationSwitch): JSX.Element => {
  return (
    <Container>
      <HomePageIntroWelcomeContainer isAnimating={props.isAnimating} />
      <HomePageIntroAboutContainer isAnimating={props.isAnimating} />
    </Container>
  );
};

/**
 * Container for the welcome image
 */
const HomePageIntroWelcomeContainer = (props: AnimationSwitch): JSX.Element => {
  const welcome = getResourceUrl('resources/welcome.png');
  return (
    <HomePageTransitionContainer
      className="homeWelcomeTransitionSection"
      animation={props.isAnimating ? 'slide left' : STATIC_ANIMATION}
      isAnimating={props.isAnimating}
      timeout={500}
    >
      <Image centered src={welcome} />
    </HomePageTransitionContainer>
  );
};

/**
 * Container for the bio
 */
const HomePageIntroAboutContainer = (props: AnimationSwitch): JSX.Element => {
  return (
    <HomePageTransitionContainer
      className="homeTransitionSection"
      animation="slide left"
      isAnimating={props.isAnimating}
      timeout={2000}
    >
      <HomePageSectionContainer title="About Me" innerLines={2} postLines={10}>
        <HomePageTextSectionTextContainer>
          &emsp;&emsp;Hi, my name is Kyle Humphrey (@kyleuniversities) and
          welcome to my website! I'm a hard worker and fast learner who loves to
          solve complex problems. I have significant experience in Java,
          ReactJS, and Python.
        </HomePageTextSectionTextContainer>
      </HomePageSectionContainer>
    </HomePageTransitionContainer>
  );
};
