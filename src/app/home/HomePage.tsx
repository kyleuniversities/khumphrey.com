import { ReactNode, useEffect, useState } from 'react';
import { Container, Transition } from 'semantic-ui-react';
import { SitePage } from '../SitePage';
import { HomePageBioContainer } from './HomePageBioContainer';
import { HomePageProjectsContainer } from './HomePageProjectsContainer';
import { HomePageWorksInProgressContainer } from './HomePageWorksInProgressContainer';

export const HomePage = (): JSX.Element => {
  return (
    <SitePage>
      <HomePageBioContainer />
      <HomePageProjectsContainer />
      <HomePageWorksInProgressContainer />
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
  timeout: number;
  children: ReactNode;
}) => {
  const [visible, setVisible] = useState(false);
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
