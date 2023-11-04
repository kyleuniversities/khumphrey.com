import { useEffect, useState } from 'react';
import { SitePage } from '../SitePage';
import ReactMarkdown from 'react-markdown';
import { Container } from 'semantic-ui-react';
import { MultiLineBreak } from '../../common/util/js/line';
import { useParams } from 'react-router';
import { ProjectCard } from '../project/ProjectCard';

export const ListPage = (): JSX.Element => {
  const { sectionId } = useParams();
  const [listPageText, setListPageText] = useState('');
  const [items, setItems] = useState([]);
  const sectionUrl = `/resources/list/${sectionId}`;
  const listUrl = window.location.origin + sectionUrl + `/pretext.md`;
  const dataUrl = window.location.origin + sectionUrl + `/data.json`;
  useEffect(() => {
    fetch(listUrl)
      .then((res) => res.text())
      .then((text) => setListPageText(text));
    fetch(dataUrl)
      .then((res) => res.json())
      .then((res) => setItems(res.items));
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
        <ReactMarkdown children={listPageText} className={'reactMarkDown'} />
        {items.map((item) => {
          return <ProjectCard name={item} />;
        })}
        <MultiLineBreak lines={3} />
      </Container>
    </SitePage>
  );
};
