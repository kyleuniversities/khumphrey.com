import { ReactNode } from 'react';
import { Container } from 'semantic-ui-react';
import { HomePageHeaderContainer } from './HomePageHeaderContainer';
import { HomePageBioContainer } from './HomePageBioContainer';
import { HomePageProjectsContainer } from './HomePageProjectsContainer';
import { HomePageWorksInProgressContainer } from './HomePageWorksInProgressContainer';

export const HomePage = (): JSX.Element => {
  return (
    <HomePageContainer>
      <HomePageHeaderContainer />
      <HomePageBioContainer />
      <HomePageProjectsContainer />
      <HomePageWorksInProgressContainer />
    </HomePageContainer>
  );
};

const HomePageContainer = (props: { children: ReactNode }): JSX.Element => {
  return (
    <Container style={{ textAlign: 'center' }}>{props.children}</Container>
  );
};
