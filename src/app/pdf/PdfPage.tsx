import { SitePage } from '../SitePage';
import { Container } from 'semantic-ui-react';
import { MultiLineBreak } from '../../common/util/js/line';
import { useParams } from 'react-router';

export const PdfPage = (): JSX.Element => {
  const { sectionId } = useParams();
  const pdfUrl = window.location.origin + `/resources/pdf/${sectionId}.pdf`;
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
          <iframe title={sectionId} src={pdfUrl} width="100%" height="1000px" />
        </div>
        <MultiLineBreak lines={3} />
      </Container>
    </SitePage>
  );
};
