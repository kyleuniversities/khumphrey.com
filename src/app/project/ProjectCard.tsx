import { Card, Container, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export const ProjectCard = (props: { name: string }): JSX.Element => {
  const [data, setData] = useState({
    title: 'Loading...',
    description: 'Loading...',
  });
  const [introText, setIntroText] = useState('');
  const dataUrl =
    window.location.origin + `/resources/project/${props.name}/data.json`;
  const image =
    window.location.origin + `/resources/project/${props.name}/image.png`;
  const introUrl =
    window.location.origin + `/resources/project/${props.name}/intro.md`;
  useEffect(() => {
    fetch(dataUrl)
      .then((res) => res.json())
      .then((res) => setData(res));
    fetch(introUrl)
      .then((res) => res.text())
      .then((text) => setIntroText(text));
  });
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
      <Link to={`/${props.name}`}>
        <span style={{ color: 'black', fontSize: '30px', fontWeight: 'bold' }}>
          <p>{data.title}</p>
        </span>
        <br />
        <Container>
          <Image centered src={image} />
        </Container>
      </Link>
      <br />
      <br />
      <span style={{ fontSize: '20px' }}>
        <ReactMarkdown children={introText} />
      </span>
    </Card>
  );
};
