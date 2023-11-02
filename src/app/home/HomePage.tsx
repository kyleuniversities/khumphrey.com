import { ReactNode, useEffect, useState } from 'react';
import { Container, Transition } from 'semantic-ui-react';
import { SitePage } from '../SitePage';
import { HomePageBioContainer } from './HomePageBioContainer';
import { HomePageProjectsContainer } from './HomePageProjectsContainer';
import { HomePageWorksInProgressContainer } from './HomePageWorksInProgressContainer';

export const DynamicHomePage = (): JSX.Element => {
  return <HomePage isAnimating={true} />;
};

export const StaticHomePage = (): JSX.Element => {
  return <HomePage isAnimating={false} />;
};

export type AnimationSwitch = {
  isAnimating: boolean;
};

const HomePage = (props: AnimationSwitch): JSX.Element => {
  return (
    <SitePage>
      <HomePageBioContainer isAnimating={props.isAnimating} />
      <HomePageProjectsContainer isAnimating={props.isAnimating} />
      <HomePageWorksInProgressContainer isAnimating={props.isAnimating} />
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
      setVisible(true);
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
