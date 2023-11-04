import { useParams } from 'react-router';
import { ResourcePage } from '../ResourcePage';

export const PdfPage = (): JSX.Element => {
  const { sectionId } = useParams();
  const pdfUrl = window.location.origin + `/resources/pdf/${sectionId}.pdf`;
  return (
    <ResourcePage>
      <div>
        <iframe title={sectionId} src={pdfUrl} width="100%" height="1000px" />
      </div>
    </ResourcePage>
  );
};
