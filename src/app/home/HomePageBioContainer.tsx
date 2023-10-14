import { ReactNode, useEffect, useState } from 'react';
import { Container, Image, Transition } from 'semantic-ui-react';

export const HomePageBioContainer = () => {
  return (
    <Container>
      <HomePageBioWelcomeContainer />
      <HomePageBioAboutContainer />
    </Container>
  );
};

const HomePageBioWelcomeContainer = () => {
  const welcome = require('../../resources/welcome.png');
  return (
    <HomePageBioTransitionContainer
      height="480px"
      animation="slide left"
      timeout={500}
    >
      <Image centered src={welcome} />
    </HomePageBioTransitionContainer>
  );
};

const HomePageBioAboutContainer = () => {
  return (
    <HomePageBioTransitionContainer
      height="300px"
      animation="slide left"
      timeout={1500}
    >
      <Container>
        <div
          style={{
            textAlign: 'left',
            marginLeft: '100px',
            marginRight: '100px',
          }}
        >
          <p>
            <span style={{ fontSize: '34px', fontWeight: 'bold' }}>
              About Me
            </span>
            <br />
            <br />
            <span style={{ lineHeight: '150%', fontSize: '27px' }}>
              &emsp;&emsp;Hi, my name is Kyle Humphrey and welcome to my
              website. I'm a hard worker and fast learner who loves to solve
              complex problems. I have significant experience in Java, ReactJS,
              and Python.
            </span>
          </p>
        </div>
      </Container>
    </HomePageBioTransitionContainer>
  );
};

const HomePageBioTransitionContainer = (props: {
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
  }, []);
  return (
    <Container style={{ height: props.height }}>
      <Transition visible={visible} animation={props.animation} duration={500}>
        {props.children}
      </Transition>
    </Container>
  );
};
