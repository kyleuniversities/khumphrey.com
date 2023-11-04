import { Container, Grid, Icon, SemanticICONS } from 'semantic-ui-react';
import {
  HomePageSectionContainer,
  HomePageTextSectionTextContainer,
  HomePageTransitionContainer,
} from './HomePage';
import {
  GridRowMultiLineBreak,
  MultiLineBreak,
} from '../../common/util/js/line';
import './index.css';

/**
 * Home Page Component for displaying technologies I have experience in
 */
export const HomePageTechnologiesContainer = (props: {
  isDynamic: boolean;
}): JSX.Element => {
  return (
    <Container>
      <HomePageTransitionContainer
        className="homeTransitionSection"
        animation="slide left"
        isAnimating={props.isDynamic}
        timeout={3500}
      >
        <HomePageSectionContainer
          title="Technologies I Have Experience In"
          innerLines={2}
          postLines={10}
        >
          <HomePageTextSectionTextContainer>
            While I am an avid coder in Java, having first coded in Java since
            Fall 2016, I have experience the the following technologies below:
          </HomePageTextSectionTextContainer>
          <MultiLineBreak lines={2} />
          <TechnologyIconGrid />
        </HomePageSectionContainer>
      </HomePageTransitionContainer>
    </Container>
  );
};

/**
 * Grid for efficiently showing technologies I have experience in
 */
const TechnologyIconGrid = (): JSX.Element => {
  return (
    <Grid className="homeTechnologyIconGrid">
      <Grid.Row>
        <TechnologyIconGridColumn iconName="coffee" name="Java" />
        <TechnologyIconGridColumn iconName="react" name="ReactJS" />
        <TechnologyIconGridColumn iconName="aws" name="AWS" />
      </Grid.Row>
      <GridRowMultiLineBreak lines={1} />
      <Grid.Row>
        <TechnologyIconGridColumn iconName="node js" name="NodeJS" />
        <TechnologyIconGridColumn iconName="python" name="Python" />
        <TechnologyIconGridColumn iconName="database" name="MySQL" />
      </Grid.Row>
    </Grid>
  );
};

/**
 * Grid Column for efficiently showing a technology I have experience in
 */
const TechnologyIconGridColumn = (props: {
  iconName: SemanticICONS;
  name: string;
}): JSX.Element => {
  const columnWidth = 5;
  const iconSize = 'large';
  return (
    <Grid.Column width={columnWidth}>
      <Icon name={props.iconName} size={iconSize} />
      <MultiLineBreak lines={1} />
      <span className="homeTechnologyIconGridText">{props.name}</span>
    </Grid.Column>
  );
};
