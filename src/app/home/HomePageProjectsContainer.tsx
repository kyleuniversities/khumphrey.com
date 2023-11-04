import { useEffect, useState } from 'react';
import { ProjectCard } from '../project/ProjectCard';
import {
  AnimationSwitch,
  HomePageSectionContainer,
  HomePageTransitionContainer,
} from './HomePage';

type ProjectListContainerProps = AnimationSwitch & {
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
    <HomePageProjectListContainer
      isAnimating={props.isAnimating}
      listId="projects"
      timeout={4250}
    />
  );
};

/**
 * Home Page Component for displaying a list of projects in progress
 */
export const HomePageWorksInProgressContainer = (
  props: AnimationSwitch
): JSX.Element => {
  return (
    <HomePageProjectListContainer
      isAnimating={props.isAnimating}
      listId="works-in-progress"
      timeout={6450}
    />
  );
};

/**
 * Home Page Component for showing a list of projects
 */
const HomePageProjectListContainer = (
  props: ProjectListContainerProps
): JSX.Element => {
  const [title, setTitle] = useState('');
  const [items, setItems] = useState([]);
  const dataUrl = `/resources/list/${props.listId}/data.json`;
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
      height="auto"
      animation="slide left"
      isAnimating={props.isAnimating}
      timeout={props.timeout}
    >
      <HomePageSectionContainer title={title} innerLines={0} postLines={5}>
        {items.map((item) => (
          <ProjectCard name={item} />
        ))}
      </HomePageSectionContainer>
    </HomePageTransitionContainer>
  );
};
