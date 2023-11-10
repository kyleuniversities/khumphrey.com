import { ReactNode } from 'react';
import { SiteHeader } from './SiteHeader';
import { SiteSection } from './SiteSection';
import { SiteFooter } from './SiteFooter';
import { ConditionalContent } from './ConditionalContent';
import { MobileHelper } from '../common/util/helper/MobileHelper';
import { MultiLineBreak } from '../common/util/js/line';

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
  //alert('WINDOW: ' + window.innerWidth + ' x ' + window.innerHeight);
  const mobileBugMessageOn =
    MobileHelper.getBrowserWidth() <= 1000 ||
    MobileHelper.getBrowserWidth() > MobileHelper.getBrowserWidth();
  return (
    <div className="sitePage">
      <ConditionalContent condition={mobileBugMessageOn}>
        <h1 className="sitePageBugMessageTitle">Mobile Support Unavailable</h1>
        <MultiLineBreak lines={1} />
        <div className="sitePageBugMessage">
          <p>
            Sorry. At the moment, this website does not offer mobile support.
          </p>
          <MultiLineBreak lines={3} />
          <p>
            Well technically, yes it does because of this message, okay fine,
            but the point is the mobile version of this website will be up as
            soon as I get some bugs fixed!
          </p>
        </div>
      </ConditionalContent>
      <ConditionalContent condition={!mobileBugMessageOn}>
        <SiteHeader sectionMap={SECTION_MAP} />
        {props.children}
        <SiteFooter sectionMap={SECTION_MAP} />
      </ConditionalContent>
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
