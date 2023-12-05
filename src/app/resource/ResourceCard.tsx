import { Card, Container, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import ReactMarkdown from 'react-markdown';
import { fetchJson, fetchText } from '../util/fetch';
import { MultiLineBreak } from '../../common/util/js/line';
import './index.css';
import { getResourceUrl } from '../util/resource';
import { MarkdownHelper } from '../helper/MarkdownHelper';
import { ifThen } from '../../common/util/conditional';
import {
  BIG_SCREEN_QUERY,
  MEDIUM_SCREEN_QUERY,
} from '../../common/util/mobile';

/**
 * Constant for the loading card
 */
const LOADING_CARD = { title: 'Loading...', description: 'Loading...' };

/**
 * Card for displaying introductory information about a project
 */
export const ProjectCard = (props: { name: string }): JSX.Element => {
  return <ResourceCard dataToken={'project'} name={props.name} />;
};

/**
 * Card for displaying introductory information about a resource
 */
const ResourceCard = (props: {
  dataToken: string;
  name: string;
}): JSX.Element => {
  const [data, setData] = useState(LOADING_CARD);
  const [introText, setIntroText] = useState('');
  const resourcePreText = getResourceUrl(
    `resources/${props.dataToken}/${props.name}`
  );
  const dataUrl = `${resourcePreText}/data.json`;
  const image = `${resourcePreText}/image.png`;
  const introUrl = `${resourcePreText}/intro.md`;
  const isBigScreen = useMediaQuery(BIG_SCREEN_QUERY);
  const isMediumScreen = useMediaQuery(MEDIUM_SCREEN_QUERY);
  const isSmallScreen = !isBigScreen && !isMediumScreen;
  useEffect(() => {
    loadResourceCard({
      dataUrl,
      introUrl,
      setData,
      setIntroText,
      isBigScreen,
      isMediumScreen,
      isSmallScreen,
    });
  }, [dataUrl, introUrl, isBigScreen, isMediumScreen, isSmallScreen]);
  return (
    <Card fluid>
      <ResourceCardContainer
        dataToken={props.dataToken}
        name={props.name}
        title={data.title}
        image={image}
        introText={introText}
      />
    </Card>
  );
};

/**
 * Container for displaying resource card data
 */
const ResourceCardContainer = (props: {
  dataToken: string;
  name: string;
  title: string;
  image: string;
  introText: string;
}): JSX.Element => {
  return (
    <Container fluid className="resourceCardContainer">
      <Link to={`/${props.dataToken}s/${props.name}`}>
        <ResourceCardTitle title={props.title} />
        <MultiLineBreak lines={2} />
        <ResourceCardImageContainer image={props.image} />
      </Link>
      <MultiLineBreak lines={2} />
      <ResourceCardMarkdown introText={props.introText} />
    </Container>
  );
};

/**
 * Span for resource card markdown
 */
const ResourceCardMarkdown = (props: { introText: string }): JSX.Element => {
  return (
    <span className="resourceCardMarkdown">
      <ReactMarkdown children={props.introText} />
    </span>
  );
};

/**
 * Span for resource card title
 */
const ResourceCardTitle = (props: { title: string }): JSX.Element => {
  return <span className="resourceCardTitle">{props.title}</span>;
};

/**
 * Container for displaying resource card image
 */
const ResourceCardImageContainer = (props: { image: string }): JSX.Element => {
  return (
    <Container>
      <Image centered src={props.image} />
    </Container>
  );
};

/**
 * Type for Resource Card Loading function properties
 */
type LoadResourceCardProps = {
  dataUrl: string;
  introUrl: string;
  setData: (res: any) => void;
  setIntroText: (res: string) => void;
  isBigScreen: boolean;
  isMediumScreen: boolean;
  isSmallScreen: boolean;
};

/**
 * Loads the resource card data
 */
const loadResourceCard = (props: LoadResourceCardProps) => {
  fetchJson(props.dataUrl, props.setData);
  fetchText(props.introUrl, (text) => {
    ifThen(props.isBigScreen, () => props.setIntroText(text));
    ifThen(props.isMediumScreen, () =>
      props.setIntroText(MarkdownHelper.reformat(text, 50))
    );
    ifThen(props.isSmallScreen, () =>
      props.setIntroText(MarkdownHelper.reformat(text, 26))
    );
  });
};
