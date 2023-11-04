import React, { ReactNode, useEffect, useState } from 'react';
import { Container, Transition } from 'semantic-ui-react';
import { SitePage } from '../SitePage';
import { HomePageIntroContainer } from './HomePageIntroContainer';
import {
  HomePageProjectsContainer,
  HomePageWorksInProgressContainer,
} from './HomePageProjectsContainer';
import { HomePageReplayContainer } from './HomePageReplayContainer';
import { HomePageTechnologiesContainer } from './HomePageTechnologiesContainer';
import { MultiLineBreak } from '../../common/util/js/line';

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
      <HomePageWorksInProgressContainer isAnimating={props.isDynamic} />
    </SitePage>
  );
};

/**
 * Container to provide content potentially sliding in in an animation
 */
export const HomePageTransitionContainer = (props: {
  height: string;
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
    <Container style={{ height: props.height }}>
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
  return (
    <span style={{ lineHeight: '150%', fontSize: '27px' }}>
      {props.children}
    </span>
  );
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
  const sectionStyle: any = {
    textAlign: 'left',
    marginLeft: '100px',
    marginRight: '100px',
  };
  return (
    <div style={sectionStyle}>
      <span style={{ fontSize: '34px', fontWeight: 'bold' }}>
        {props.title}
      </span>
      <MultiLineBreak lines={props.innerLines} />
      {props.children}
      <MultiLineBreak lines={props.postLines} />
    </div>
  );
};
