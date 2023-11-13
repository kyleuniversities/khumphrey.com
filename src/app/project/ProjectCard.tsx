import { Card, Container, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { fetchJson, fetchText } from '../util/fetch';
import { MultiLineBreak } from '../../common/util/js/line';
import './index.css';
import { getResourceUrl } from '../util/resource';
import { MarkdownHelper } from '../helper/MarkdownHelper';
import { ifThen } from '../../common/util/conditional';
import { MobileHelper } from '../../common/util/helper/MobileHelper';

/**
 * Constant for the loading card
 */
const LOADING_CARD = { title: 'Loading...', description: 'Loading...' };

/**
 * Card for displaying introductory information about a project
 */
export const ProjectCard = (props: { name: string }): JSX.Element => {
  const [data, setData] = useState(LOADING_CARD);
  const [introText, setIntroText] = useState('');
  const resourcePreText = getResourceUrl(`resources/project/${props.name}`);
  const dataUrl = `${resourcePreText}/data.json`;
  const image = `${resourcePreText}/image.png`;
  const introUrl = `${resourcePreText}/intro.md`;
  useEffect(() => {
    fetchJson(dataUrl, setData);
    fetchText(introUrl, (text) => {
      const isMobile = MobileHelper.getBrowserArea() < 700 * 500;
      ifThen(isMobile, () => setIntroText(MarkdownHelper.reformat(text)));
      ifThen(!isMobile, () => setIntroText(text));
    });
  }, [dataUrl, introUrl]);
  return (
    <Card fluid>
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
    <Container fluid className="projectCardContainer">
      <Link to={`/projects/${props.dataToken}`}>
        <ProjectCardTitle title={props.title} />
        <MultiLineBreak lines={2} />
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
    <span className="projectCardMarkdown">
      <ReactMarkdown children={props.introText} />
    </span>
  );
};

/**
 * Span for project card title
 */
const ProjectCardTitle = (props: { title: string }): JSX.Element => {
  return <span className="projectCardTitle">{props.title}</span>;
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
