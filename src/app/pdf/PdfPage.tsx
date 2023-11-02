import { useEffect, useState } from 'react';
import { SitePage } from '../SitePage';
import ReactMarkdown from 'react-markdown';
import { Container } from 'semantic-ui-react';
import { MultiLineBreak } from '../../common/util/js/line';
import { useParams } from 'react-router';

export const PdfPage = (): JSX.Element => {
  const { sectionId } = useParams();
  const [pdfPageText, setPdfPageText] = useState('');
  const pdfUrl = window.location.origin + `/resources/pdf/${sectionId}.pdf`;
  useEffect(() => {
    fetch(pdfUrl)
      .then((res) => res.text())
      .then((text) => setPdfPageText(text));
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
        <div>
          <iframe src={pdfUrl} width="100%" height="1000px" />
        </div>
        <MultiLineBreak lines={3} />
      </Container>
    </SitePage>
  );
};
