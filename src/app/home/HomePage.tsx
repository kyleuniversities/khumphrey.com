import { ReactNode, useEffect, useState } from 'react';
import { Container, Transition } from 'semantic-ui-react';
import { SitePage } from '../SitePage';
import { HomePageIntroContainer } from './HomePageIntroContainer';
import {
  HomePageAccomplishmentsContainer,
  HomePageProjectsContainer,
  HomePageTechnologyArticlesContainer,
} from './HomePageWorksContainer';
import { HomePageReplayContainer } from './HomePageReplayContainer';
import { HomePageTechnologiesContainer } from './HomePageTechnologiesContainer';
import { MultiLineBreak } from '../../common/util/js/line';
import './index.css';

/**
 * Home Page component including slide-in animation
 */
export const DynamicHomePage = (): JSX.Element => {
  return <HomePage isDynamic={true} />;
};

/**
 * Home Page component excluding slide-in animation
 */
export const StaticHomePage = (): JSX.Element => {
  return <HomePage isDynamic={false} />;
};

/**
 * Parameter type for Home Page components
 */
export type AnimationSwitch = {
  isAnimating: boolean;
};

/**
 * Constant for static home page animation
 */
export const STATIC_ANIMATION = 'pulse';

/**
 * Home Page component
 */
const HomePage = (props: { isDynamic: boolean }): JSX.Element => {
  return (
    <SitePage>
      <HomePageIntroContainer isAnimating={props.isDynamic} />
      <HomePageReplayContainer isDynamic={props.isDynamic} />
      <HomePageTechnologiesContainer isDynamic={props.isDynamic} />
      <HomePageProjectsContainer isAnimating={props.isDynamic} />
      <HomePageTechnologyArticlesContainer isAnimating={props.isDynamic} />
    </SitePage>
  );
};

/**
 * Container to provide content potentially sliding in in an animation
 */
export const HomePageTransitionContainer = (props: {
  className: string;
  animation: string;
  isAnimating: boolean;
  timeout: number;
  children: ReactNode;
}) => {
  const [visible, setVisible] = useState(!props.isAnimating);
  useEffect(() => {
    setTimeout(() => {
      if (props.isAnimating || props.animation === STATIC_ANIMATION) {
        setVisible(props.isAnimating);
      }
    }, props.timeout);
  });
  return (
    <Container className={props.className}>
      <Transition visible={visible} animation={props.animation} duration={500}>
        <Container>{props.children}</Container>
      </Transition>
    </Container>
  );
};

/**
 * Container for text based section content
 */
export const HomePageTextSectionTextContainer = (props: {
  children: ReactNode;
}) => {
  return <span className="homeSectionText">{props.children}</span>;
};

/**
 * Container for section content
 */
export const HomePageSectionContainer = (props: {
  title: string;
  innerLines: number;
  postLines: number;
  children: ReactNode;
}) => {
  return (
    <div className="homeSection">
      <span className="homeSectionHeader">{props.title}</span>
      <MultiLineBreak lines={props.innerLines} />
      {props.children}
      <MultiLineBreak lines={props.postLines} />
    </div>
  );
};
