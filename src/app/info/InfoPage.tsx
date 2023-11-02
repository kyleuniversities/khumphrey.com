import { useEffect, useState } from 'react';
import { SitePage } from '../SitePage';
import ReactMarkdown from 'react-markdown';
import { Container } from 'semantic-ui-react';
import { MultiLineBreak } from '../../common/util/js/line';
import { useParams } from 'react-router';

export const InfoPage = (): JSX.Element => {
  const { sectionId } = useParams();
  const [infoPageText, setInfoPageText] = useState('');
  const infoUrl =
    window.location.origin + `/resources/info/${sectionId}/full.md`;
  useEffect(() => {
    fetch(infoUrl)
      .then((res) => res.text())
      .then((text) => setInfoPageText(text));
  });
  return (
    <SitePage>
      <Container
        style={{
          textAlign: 'left',
          fontSize: '20px',
          minHeight: '100vh',
          color: 'black',
        }}
      >
        <MultiLineBreak lines={1} />
        <ReactMarkdown children={infoPageText} className={'reactMarkDown'} />
        <MultiLineBreak lines={3} />
      </Container>
    </SitePage>
  );
};
