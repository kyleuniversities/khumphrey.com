import { useEffect, useState } from 'react';
import { SitePage } from '../SitePage';
import ReactMarkdown from 'react-markdown';
import { Container } from 'semantic-ui-react';
import { MultiLineBreak } from '../../common/util/js/line';
import { useParams } from 'react-router';
import { ProjectCard } from '../project/ProjectCard';
import { ResourcePage } from '../ResourcePage';
import { fetchJson, fetchText } from '../util/fetch';

export const ListPage = (): JSX.Element => {
  const { sectionId } = useParams();
  const [listPageText, setListPageText] = useState('');
  const [items, setItems] = useState([]);
  const resourcePretext =
    window.location.origin + `/resources/list/${sectionId}`;
  const listUrl = resourcePretext + `/pretext.md`;
  const dataUrl = resourcePretext + `/data.json`;
  useEffect(() => {
    fetchText(listUrl, setListPageText);
    fetchJson(dataUrl, (res) => setItems(res.items));
  }, [listUrl, dataUrl]);
  return (
    <ResourcePage>
      <ReactMarkdown children={listPageText} className={'reactMarkDown'} />
      {items.map((item) => {
        return <ProjectCard name={item} />;
      })}
    </ResourcePage>
  );
};
