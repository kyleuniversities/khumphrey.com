import { SitePage } from '../SitePage';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router';
import { Container } from 'semantic-ui-react';
import { MultiLineBreak } from '../../common/util/js/line';

export const ProjectPage = (): JSX.Element => {
  const { projectId } = useParams();
  const [projectPageText, setProjectPageText] = useState('');
  const projectUrl =
    window.location.origin + `/resources/project/${projectId}/full.md`;
  useEffect(() => {
    fetch(projectUrl)
      .then((res) => res.text())
      .then((text) => setProjectPageText(text));
  });
  return (
    <SitePage>
      <Container
        style={{ textAlign: 'left', fontSize: '20px', minHeight: '100vh' }}
      >
        <MultiLineBreak lines={1} />
        <ReactMarkdown children={projectPageText} />
        <MultiLineBreak lines={3} />
      </Container>
    </SitePage>
  );
};
