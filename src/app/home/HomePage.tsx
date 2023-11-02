import { ReactNode, useEffect, useState } from 'react';
import { Container, Transition } from 'semantic-ui-react';
import { SitePage } from '../SitePage';
import { HomePageBioContainer } from './HomePageBioContainer';
import { HomePageProjectsContainer } from './HomePageProjectsContainer';
import { HomePageWorksInProgressContainer } from './HomePageWorksInProgressContainer';
import { HomePageReplayContainer } from './HomePageReplayContainer';

export const DynamicHomePage = (): JSX.Element => {
  return <HomePage isDynamic={true} />;
};

export const StaticHomePage = (): JSX.Element => {
  return <HomePage isDynamic={false} />;
};

export type AnimationSwitch = {
  isAnimating: boolean;
};

export const STATIC_ANIMATION = 'pulse';

const HomePage = (props: { isDynamic: boolean }): JSX.Element => {
  return (
    <SitePage>
      <HomePageBioContainer isAnimating={props.isDynamic} />
      <HomePageReplayContainer isDynamic={props.isDynamic} />
      <HomePageProjectsContainer isAnimating={props.isDynamic} />
      <HomePageWorksInProgressContainer isAnimating={props.isDynamic} />
    </SitePage>
  );
};

const HomePageContainer = (props: { children: ReactNode }): JSX.Element => {
  return (
    <Container style={{ textAlign: 'center' }}>{props.children}</Container>
  );
};

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
        {props.children}
      </Transition>
    </Container>
  );
};
