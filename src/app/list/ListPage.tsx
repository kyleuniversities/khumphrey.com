import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router';
import { ProjectCard } from '../project/ProjectCard';
import { ResourcePage } from '../ResourcePage';
import { fetchJson, fetchText } from '../util/fetch';
import { get } from 'http';
import { getResourceUrl } from '../util/resource';

/**
 * Page for displaying a markdown as well as a list of items
 */
export const ListPage = (): JSX.Element => {
  const { sectionId } = useParams();
  const [listPageText, setListPageText] = useState('');
  const [items, setItems] = useState([]);
  const resourcePretext = getResourceUrl(`/resources/list/${sectionId}`);
  const listUrl = resourcePretext + `/pretext.md`;
  const dataUrl = resourcePretext + `/data.json`;
  useEffect(() => {
    fetchText(listUrl, setListPageText);
    fetchJson(dataUrl, (res) => setItems(res.items));
  }, [listUrl, dataUrl]);
  return (
    <ResourcePage>
      <ReactMarkdown children={listPageText} className="reactMarkdown" />
      {items.map((item) => {
        return <ProjectCard name={item} />;
      })}
    </ResourcePage>
  );
};
