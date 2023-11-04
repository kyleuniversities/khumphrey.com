import { ReactNode, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Dropdown,
  Grid,
  Header,
  Icon,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react';
import { SiteHeader } from './SiteHeader';
import { fetchJson } from './util/fetch';
import { SiteSection } from './SiteSection';
import { SiteFooter } from './SiteFooter';

/**
 * Structure for storing site section data
 */
const SECTION_MAP = {
  ABOUT_ME: SiteSection.newInstance('About Me', '/sections/info/about-me'),
  RESUME: SiteSection.newInstance('Resume', '/sections/pdfs/resume'),
  CURRICULUM_VITAE: SiteSection.newInstance(
    'Curriculum Vitae',
    '/sections/pdfs/curriculum-vitae'
  ),
  TECHNOLOGIES: SiteSection.newInstance(
    'Technologies I Have Experience In',
    '/sections/info/technologies'
  ),
  ACCOMPLISHMENTS: SiteSection.newInstance(
    'Accomplishments',
    '/sections/lists/accomplishments'
  ),
  PROJECTS: SiteSection.newInstance('Projects', '/sections/lists/projects'),
  WORKS_IN_PROGRESS: SiteSection.newInstance(
    'Works In Progress',
    '/sections/lists/works-in-progress'
  ),
};

/**
 * General website page including a header and footer
 */
export const SitePage = (props: { children: ReactNode }): JSX.Element => {
  alert('WINDOW: ' + window.innerWidth + ' x ' + window.innerHeight);
  return (
    <Container fluid style={{ textAlign: 'center' }}>
      <SiteHeader sectionMap={SECTION_MAP} />
      {props.children}
      <SiteFooter sectionMap={SECTION_MAP} />
    </Container>
  );
};

/**
 * Type for components representing site section group s
 */
export type SiteSectionGroupProps = {
  title: string;
  sectionMap: any;
  sectionKeys: string[];
};
