import { useEffect, useState } from 'react';
import { Card, Container, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export const ProjectCard = (props: { name: string }): JSX.Element => {
  const data = require(`../../resources/project/${props.name}/data.json`);
  const image = require(`../../resources/project/${props.name}/image.png`);
  const padding = '40px';
  return (
    <Card
      fluid
      style={{
        textAlign: 'left',
        paddingLeft: padding,
        paddingRight: padding,
        paddingTop: padding,
        paddingBottom: padding,
      }}
    >
      <span style={{ fontSize: '30px', fontWeight: 'bold' }}>
        <p>{data.title}</p>
      </span>
      <br />
      <Container>
        <Image centered src={image} />
      </Container>
      <br />
      <br />
      <span style={{ fontSize: '20px' }}>
        <p>{data.description}</p>
        {data.github.map((github: string) => (
          <p>
            <Link to={github}>{github}</Link>
          </p>
        ))}
      </span>
    </Card>
  );
};
