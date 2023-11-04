import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { SitePage } from './SitePage';
import { Container } from 'semantic-ui-react';
import { MultiLineBreak } from '../common/util/js/line';
import ReactMarkdown from 'react-markdown';

/**
 * Page that loads a purely text markdown resource
 */
export const ResourcePage = (props: { dataToken: string }): JSX.Element => {
  const { id } = useParams();
  const [resourcePageText, setResourcePageText] = useState('');
  const projectUrl =
    window.location.origin + `/resources/${props.dataToken}/${id}/full.md`;
  useEffect(() => {
    fetch(projectUrl)
      .then((res) => res.text())
      .then((text) => setResourcePageText(text));
  });
  return (
    <SitePage>
      <Container
        style={{ textAlign: 'left', fontSize: '20px', minHeight: '100vh' }}
      >
        <MultiLineBreak lines={1} />
        <ReactMarkdown children={resourcePageText} />
        <MultiLineBreak lines={3} />
      </Container>
    </SitePage>
  );
};
