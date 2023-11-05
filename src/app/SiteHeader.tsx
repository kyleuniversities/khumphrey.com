import { Link, useNavigate } from 'react-router-dom';
import { Container, Dropdown, Icon, Menu } from 'semantic-ui-react';
import { SiteSectionGroupProps } from './SitePage';
import { MobileHelper } from '../common/util/helper/MobileHelper';
import { ConditionalContent } from './ConditionalContent';
import './index.css';
import { ReactNode } from 'react';

/**
 * The header for the website
 */
export const SiteHeader = (props: { sectionMap: any }): JSX.Element => {
  const isBigScreen = MobileHelper.isBigScreen();
  return (
    <>
      <ConditionalContent condition={isBigScreen}>
        <SiteBigHeader sectionMap={props.sectionMap} />
      </ConditionalContent>
      <ConditionalContent condition={!isBigScreen}>
        <SiteSmallHeader sectionMap={props.sectionMap} />
      </ConditionalContent>
    </>
  );
};

/**
 * The header for the website on a big screen
 */
const SiteBigHeader = (props: { sectionMap: any }): JSX.Element => {
  return (
    <Container>
      <Menu secondary>
        <SiteHeaderHomeIcon />
        <SiteHeaderHomeTitle />
        <Menu.Item position="right">
          <SiteHeaderAboutDropdown sectionMap={props.sectionMap} />
          <SiteHeaderSkillsDropdown sectionMap={props.sectionMap} />
          <SiteHeaderProjectsDropdown sectionMap={props.sectionMap} />
          <SiteHeaderLinkedInIcon />
          <SiteHeaderGitHubIcon />
        </Menu.Item>
      </Menu>
    </Container>
  );
};

/**
 * The header for the website on a small screen
 */
const SiteSmallHeader = (props: { sectionMap: any }): JSX.Element => {
  return (
    <Container>
      <Menu secondary>
        <SiteHeaderHomeIcon />
        <SiteHeaderHomeTitle />
      </Menu>
      <Menu secondary>
        <Menu.Item position="right">
          <SiteHeaderAboutDropdown sectionMap={props.sectionMap} />
          <SiteHeaderSkillsDropdown sectionMap={props.sectionMap} />
          <SiteHeaderProjectsDropdown sectionMap={props.sectionMap} />
          <SiteHeaderLinkedInIcon />
          <SiteHeaderGitHubIcon />
        </Menu.Item>
      </Menu>
    </Container>
  );
};

/**
 * The header for the website on a small screen
 */

/**
 * Home Icon for Site Header
 */
const SiteHeaderHomeIcon = (): JSX.Element => {
  return (
    <SiteHeaderHomeButtonMenuItem>
      <Icon name="home" />
    </SiteHeaderHomeButtonMenuItem>
  );
};

/**
 * Title for Site Header
 */
const SiteHeaderHomeTitle = (): JSX.Element => {
  return (
    <SiteHeaderHomeButtonMenuItem>
      Kyle Universities
    </SiteHeaderHomeButtonMenuItem>
  );
};

/**
 * Dropdown for About Content
 */
const SiteHeaderAboutDropdown = (props: { sectionMap: any }): JSX.Element => {
  return (
    <SiteHeaderDropdown
      title="About"
      sectionMap={props.sectionMap}
      sectionKeys={['ABOUT_ME', 'RESUME', 'CURRICULUM_VITAE']}
    />
  );
};

/**
 * Dropdown for Skills Content
 */
const SiteHeaderSkillsDropdown = (props: { sectionMap: any }): JSX.Element => {
  return (
    <SiteHeaderDropdown
      title="Skills"
      sectionMap={props.sectionMap}
      sectionKeys={['TECHNOLOGIES', 'ACCOMPLISHMENTS']}
    />
  );
};

/**
 * Dropdown for Projects Content
 */
const SiteHeaderProjectsDropdown = (props: {
  sectionMap: any;
}): JSX.Element => {
  return (
    <SiteHeaderDropdown
      title="Projects"
      sectionMap={props.sectionMap}
      sectionKeys={['PROJECTS', 'WORKS_IN_PROGRESS']}
    />
  );
};

/**
 * Home Icon for my Linked In
 */
const SiteHeaderLinkedInIcon = (): JSX.Element => {
  return (
    <Link to="https://www.linkedin.com/in/kyle-humphrey-b1324524a">
      <Icon color="black" name="linkedin" size="big" />
    </Link>
  );
};

/**
 * Home Icon for my GitHub
 */
const SiteHeaderGitHubIcon = (): JSX.Element => {
  return (
    <Link to="https://github.com/kyleuniversities">
      <Icon color="black" name="github" size="big" />
    </Link>
  );
};

/**
 * Dropdown for Site Header
 */
const SiteHeaderDropdown = (props: SiteSectionGroupProps): JSX.Element => {
  const sectionMap = props.sectionMap;
  return (
    <div className="siteHeaderDropdownHeader">
      <Dropdown inline item text={props.title}>
        <Dropdown.Menu>
          {props.sectionKeys.map((key) => (
            <SiteHeaderDropdownItem siteSection={sectionMap[key]} />
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

/**
 * Dropdown Item for About Content
 */
const SiteHeaderDropdownItem = (props: { siteSection: any }): JSX.Element => {
  const siteSection = props.siteSection;
  return (
    <Dropdown.Item as={Link} to={siteSection.url}>
      <span className="siteHeaderDropdownItem">{siteSection.title}</span>
    </Dropdown.Item>
  );
};

/**
 * Button that links to the static Home Page
 */
const SiteHeaderHomeButtonMenuItem = (props: {
  children: ReactNode;
}): JSX.Element => {
  const navigate = useNavigate();
  return (
    <Menu.Item>
      <span
        className="siteHeaderHomeButton"
        onClick={() => {
          navigate('/home');
          window.location.reload();
        }}
      >
        {props.children}
      </span>
    </Menu.Item>
  );
};
