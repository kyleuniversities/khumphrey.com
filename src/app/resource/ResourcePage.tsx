import { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useMediaQuery } from 'react-responsive';
import { SitePage } from '../SitePage';
import { Container } from 'semantic-ui-react';
import { MultiLineBreak } from '../../common/util/js/line';
import ReactMarkdown from 'react-markdown';
import { fetchJson, fetchText } from '../util/fetch';
import './index.css';
import { getResourceUrl } from '../util/resource';
import {
  BIG_SCREEN_QUERY,
  MEDIUM_SCREEN_QUERY,
} from '../../common/util/mobile';
import { ifThen } from '../../common/util/conditional';
import { MarkdownHelper } from '../helper/MarkdownHelper';
import { ResourceCard } from './ResourceCard';

/**
 * Page for displaying pure markdown info articles
 */
export const InfoPage = (): JSX.Element => {
  return <ResourceTextPage dataToken="info" />;
};

/**
 * Page for displaying a markdown as well as a list of items
 */
export const ListPage = (): JSX.Element => {
  const { sectionId } = useParams();
  const [listPageText, setListPageText] = useState('');
  const [dataToken, setDataToken] = useState('');
  const [items, setItems] = useState([]);
  const resourcePretext = getResourceUrl(`resources/list/${sectionId}`);
  const listUrl = resourcePretext + `/pretext.md`;
  const dataUrl = resourcePretext + `/data.json`;
  useEffect(() => {
    fetchText(listUrl, setListPageText);
    fetchJson(dataUrl, (res) => {
      setDataToken(res.dataToken);
      setItems(res.items);
    });
  }, [listUrl, dataUrl]);
  return (
    <ResourcePage>
      <ReactMarkdown children={listPageText} className="reactMarkdown" />
      {items.map((item) => {
        return <ResourceCard dataToken={dataToken} name={item} />;
      })}
    </ResourcePage>
  );
};

/**
 * Page for displaying pure markdown note articles
 */
export const NotePage = (): JSX.Element => {
  return <ResourceTextPage dataToken="note" />;
};

/**
 * Page for displaying a PDF
 */
export const PdfPage = (): JSX.Element => {
  const { sectionId } = useParams();
  const pdfUrl = getResourceUrl(`resources/pdf/${sectionId}.pdf`);
  return (
    <ResourcePage>
      <div>
        <iframe title={sectionId} src={pdfUrl} width="100%" height="1000px" />
      </div>
    </ResourcePage>
  );
};

/**
 * Page for displaying pure markdown project articles
 */
export const ProjectPage = (): JSX.Element => {
  return <ResourceTextPage dataToken="project" />;
};

/**
 * Page for displaying algorithm articles
 */
export const AlgorithmPage = (): JSX.Element => {
  return <ResourceTextPage dataToken="algorithm" />;
};

/**
 * Page for displaying technology articles
 */
export const TechnologyPage = (): JSX.Element => {
  return <ResourceTextPage dataToken="technology" />;
};

/**
 * Page that loads a resource
 */
const ResourcePage = (props: { children: ReactNode }): JSX.Element => {
  return (
    <SitePage>
      <Container className="resourcePage">
        <MultiLineBreak lines={1} />
        {props.children}
        <MultiLineBreak lines={3} />
      </Container>
    </SitePage>
  );
};

/**
 * Page that loads a purely text markdown resource
 */
const ResourceTextPage = (props: { dataToken: string }): JSX.Element => {
  const { id } = useParams();
  const [resourcePageText, setResourcePageText] = useState('');
  const resourceUrl = getResourceUrl(
    `resources/${props.dataToken}/${id}/full.md`
  );
  const isBigScreen = useMediaQuery(BIG_SCREEN_QUERY);
  const isMediumScreen = useMediaQuery(MEDIUM_SCREEN_QUERY);
  const isSmallScreen = !isBigScreen && !isMediumScreen;
  useEffect(() => {
    fetchText(resourceUrl, (text) => {
      ifThen(isSmallScreen, () =>
        setResourcePageText(MarkdownHelper.reformat(text, 40))
      );
      ifThen(!isSmallScreen, () => setResourcePageText(text));
    });
  }, [resourceUrl, isSmallScreen]);
  return (
    <ResourcePage>
      <ReactMarkdown className="reactMarkdown" children={resourcePageText} />
    </ResourcePage>
  );
};
