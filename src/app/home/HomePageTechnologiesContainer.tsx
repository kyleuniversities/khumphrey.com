import { Button, Container, Grid, Icon, Image } from 'semantic-ui-react';
import {
  AnimationSwitch,
  HomePageTransitionContainer,
  STATIC_ANIMATION,
} from './HomePage';
import { MultiLineBreak } from '../../common/util/js/line';
import { useNavigate } from 'react-router';
import { ConditionalContent } from '../ConditionalContent';

export const HomePageTechnologiesContainer = (props: {
  isDynamic: boolean;
}): JSX.Element => {
  const navigate = useNavigate();
  const columnWidth = 5;
  const iconSize = 'large';
  return (
    <Container>
      <HomePageTransitionContainer
        height="auto"
        animation="slide left"
        isAnimating={props.isDynamic}
        timeout={2750}
      >
        <div
          style={{
            textAlign: 'left',
            marginLeft: '100px',
            marginRight: '100px',
          }}
        >
          <p>
            <span style={{ fontSize: '34px', fontWeight: 'bold' }}>
              Technologies I Have Experience In
            </span>
            <br />
            <br />
            <span
              style={{
                textAlign: 'center',
                lineHeight: '150%',
                fontSize: '27px',
              }}
            >
              <span style={{ lineHeight: '150%', fontSize: '27px' }}>
                While I am an avid coder in Java, having first coded in Java
                since Fall 2016, I have experience the the following
                technologies below:
              </span>
              <MultiLineBreak lines={2} />
              <Grid>
                <Grid.Row>
                  <Grid.Column width={columnWidth}>
                    <Icon name="coffee" size={iconSize} />
                    <p>Java</p>
                  </Grid.Column>
                  <Grid.Column width={columnWidth}>
                    <Icon name="react" size={iconSize} />
                    <p>ReactJS</p>
                  </Grid.Column>
                  <Grid.Column width={columnWidth}>
                    <Icon name="aws" size={iconSize} />
                    <p>AWS</p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <MultiLineBreak lines={1} />
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={columnWidth}>
                    <Icon name="node js" size={iconSize} />
                    <p>NodeJS</p>
                  </Grid.Column>
                  <Grid.Column width={columnWidth}>
                    <Icon name="python" size={iconSize} />
                    <p>Python</p>
                  </Grid.Column>
                  <Grid.Column width={columnWidth}>
                    <Icon name="database" size={iconSize} />
                    <p>MySQL</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </span>
          </p>
          <MultiLineBreak lines={10} />
        </div>
      </HomePageTransitionContainer>
    </Container>
  );
};
