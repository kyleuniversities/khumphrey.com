import { ReactNode } from 'react';
import { Container } from 'semantic-ui-react';
import { HomePageNavBar } from './HomePageNavBar';
import { HomePageBioContainer } from './HomePageBioContainer';
import { HomePageProjectsContainer } from './HomePageProjectsContainer';
import { HomePageWorksInProgressContainer } from './HomePageWorksInProgressContainer';

export const HomePage = (): JSX.Element => {
  return (
    <HomePageContainer>
      <HomePageNavBar />
      <HomePageBioContainer />
      <HomePageProjectsContainer />
      <HomePageWorksInProgressContainer />
    </HomePageContainer>
  );
};

const HomePageContainer = (props: { children: ReactNode }): JSX.Element => {
  return <Container>{props.children}</Container>;
};
