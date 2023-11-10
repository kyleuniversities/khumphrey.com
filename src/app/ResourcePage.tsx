import { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { SitePage } from './SitePage';
import { Container } from 'semantic-ui-react';
import { MultiLineBreak } from '../common/util/js/line';
import ReactMarkdown from 'react-markdown';
import { fetchText } from './util/fetch';
import './index.css';
import { getResourceUrl } from './util/resource';

/**
 * Page that loads a resource
 */
export const ResourcePage = (props: { children: ReactNode }): JSX.Element => {
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
export const ResourceTextPage = (props: { dataToken: string }): JSX.Element => {
  const { id } = useParams();
  const [resourcePageText, setResourcePageText] = useState('');
  const resourceUrl = getResourceUrl(
    `resources/${props.dataToken}/${id}/full.md`
  );
  useEffect(() => {
    fetchText(resourceUrl, setResourcePageText);
  }, [resourceUrl]);
  return (
    <ResourcePage>
      <ReactMarkdown className="reactMarkdown" children={resourcePageText} />
    </ResourcePage>
  );
};
