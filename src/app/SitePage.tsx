import { ReactNode } from 'react';
import { SiteHeader } from './SiteHeader';
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
  TECHNOLOGY_OVERVIEW: SiteSection.newInstance(
    'Technology Overview',
    '/sections/info/technologies'
  ),
  TECHNOLOGY_PAGES: SiteSection.newInstance(
    'Technology Pages',
    '/sections/lists/technologies'
  ),
  PROJECTS: SiteSection.newInstance('Projects', '/sections/lists/projects'),
  ACCOMPLISHMENTS: SiteSection.newInstance(
    'Accomplishments',
    '/sections/lists/accomplishments'
  ),
};

/**
 * General website page including a header and footer
 */
export const SitePage = (props: { children: ReactNode }): JSX.Element => {
  // alert('WINDOW: ' + window.innerWidth + ' x ' + window.innerHeight);
  return (
    <div className="sitePage">
      <SiteHeader sectionMap={SECTION_MAP} />
      {props.children}
      <SiteFooter sectionMap={SECTION_MAP} />
    </div>
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
