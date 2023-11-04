import { Card, Container, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { fetchJson, fetchText } from '../util/fetch';
import { MultiLineBreak } from '../../common/util/js/line';

/**
 * Constant for the loading card
 */
const LOADING_CARD = { title: 'Loading...', description: 'Loading...' };

/**
 * Constant for the Card padding
 */
const padding = '40px';

/**
 * Constant for card style attributes
 */
const PROJECT_CARD_STYLE: any = {
  textAlign: 'left',
  paddingLeft: padding,
  paddingRight: padding,
  paddingTop: padding,
  paddingBottom: padding,
};

/**
 * Card for displaying introductory information about a project
 */
export const ProjectCard = (props: { name: string }): JSX.Element => {
  const [data, setData] = useState(LOADING_CARD);
  const [introText, setIntroText] = useState('');
  const resourcePreText = `${window.location.origin}/resources/project/${props.name}`;
  const dataUrl = `${resourcePreText}/data.json`;
  const image = `${resourcePreText}/image.png`;
  const introUrl = `${resourcePreText}/intro.md`;
  useEffect(() => {
    fetchJson(dataUrl, setData);
    fetchText(introUrl, setIntroText);
  }, [dataUrl, introUrl]);
  return (
    <Card fluid style={PROJECT_CARD_STYLE}>
      <ProjectCardContainer
        dataToken={props.name}
        title={data.title}
        image={image}
        introText={introText}
      />
    </Card>
  );
};

/**
 * Container for displaying project card data
 */
const ProjectCardContainer = (props: {
  dataToken: string;
  title: string;
  image: string;
  introText: string;
}): JSX.Element => {
  return (
    <Container fluid>
      <Link to={`/projects/${props.dataToken}`}>
        <ProjectCardTitle title={props.title} />
        <MultiLineBreak lines={1} />
        <ProjectCardImageContainer image={props.image} />
      </Link>
      <MultiLineBreak lines={2} />
      <ProjectCardMarkdown introText={props.introText} />
    </Container>
  );
};

/**
 * Span for project card markdown
 */
const ProjectCardMarkdown = (props: { introText: string }): JSX.Element => {
  return (
    <span style={{ fontSize: '20px' }}>
      <ReactMarkdown children={props.introText} />
    </span>
  );
};

/**
 * Span for project card title
 */
const ProjectCardTitle = (props: { title: string }): JSX.Element => {
  return (
    <span style={{ color: 'black', fontSize: '30px', fontWeight: 'bold' }}>
      <p>{props.title}</p>
    </span>
  );
};

/**
 * Container for displaying project card image
 */
const ProjectCardImageContainer = (props: { image: string }): JSX.Element => {
  return (
    <Container>
      <Image centered src={props.image} />
    </Container>
  );
};
