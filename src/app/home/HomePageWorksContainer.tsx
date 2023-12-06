import { useEffect, useState } from 'react';
import { ResourceCard } from '../resource/ResourceCard';
import {
  AnimationSwitch,
  HomePageSectionContainer,
  HomePageTransitionContainer,
} from './HomePage';
import './index.css';
import { getResourceUrl } from '../util/resource';

type WorksContainerProps = AnimationSwitch & {
  dataToken: string;
  listId: string;
  timeout: number;
};

/**
 * Home Page Component for showing a list of projects
 */
export const HomePageProjectsContainer = (
  props: AnimationSwitch
): JSX.Element => {
  return (
    <HomePageWorksContainer
      isAnimating={props.isAnimating}
      dataToken="project"
      listId="projects"
      timeout={4250}
    />
  );
};

/**
 * Home Page Component for displaying a list of accomplishments
 */
export const HomePageAccomplishmentsContainer = (
  props: AnimationSwitch
): JSX.Element => {
  return (
    <HomePageWorksContainer
      isAnimating={props.isAnimating}
      dataToken="project"
      listId="accomplishments"
      timeout={6450}
    />
  );
};

/**
 * Home Page Component for displaying a list of technology articles
 */
export const HomePageTechnologyArticlesContainer = (
  props: AnimationSwitch
): JSX.Element => {
  return (
    <HomePageWorksContainer
      isAnimating={props.isAnimating}
      dataToken="technology"
      listId="technologies"
      timeout={7500}
    />
  );
};

/**
 * Home Page Component for showing a list of works
 */
const HomePageWorksContainer = (props: WorksContainerProps): JSX.Element => {
  const [title, setTitle] = useState('');
  const [items, setItems] = useState([]);
  const dataUrl = getResourceUrl(
    `resources/list/${props.listId}/home-data.json`
  );
  useEffect(() => {
    fetch(dataUrl)
      .then((res) => res.json())
      .then((res) => {
        setTitle(res.title);
        setItems(res.items);
      });
  });
  return (
    <HomePageTransitionContainer
      className="homeTransitionSection"
      animation="slide left"
      isAnimating={props.isAnimating}
      timeout={props.timeout}
    >
      <HomePageSectionContainer title={title} innerLines={0} postLines={5}>
        {items.map((item) => (
          <ResourceCard dataToken={props.dataToken} name={item} />
        ))}
      </HomePageSectionContainer>
    </HomePageTransitionContainer>
  );
};
