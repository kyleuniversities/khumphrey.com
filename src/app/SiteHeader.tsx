import { Link, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Container, Dropdown, Icon, Menu } from 'semantic-ui-react';
import { SiteSectionGroupProps } from './SitePage';
import { ConditionalContent } from './ConditionalContent';
import './index.css';
import { ReactNode } from 'react';
import { CenteredContainer } from './CenterContainer';
import { BIG_SCREEN_QUERY, MEDIUM_SCREEN_QUERY } from '../common/util/mobile';

/**
 * The header for the website
 */
export const SiteHeader = (props: { sectionMap: any }): JSX.Element => {
  const isBigScreen = useMediaQuery(BIG_SCREEN_QUERY);
  const isMediumScreen = useMediaQuery(MEDIUM_SCREEN_QUERY);
  const isSmallScreen = !isBigScreen && !isMediumScreen;
  return (
    <>
      <ConditionalContent condition={isBigScreen}>
        <SiteBigHeader sectionMap={props.sectionMap} />
      </ConditionalContent>
      <ConditionalContent condition={isMediumScreen}>
        <SiteMediumHeader sectionMap={props.sectionMap} />
      </ConditionalContent>
      <ConditionalContent condition={isSmallScreen}>
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
 * The header for the website on a medium screen
 */
const SiteMediumHeader = (props: { sectionMap: any }): JSX.Element => {
  return (
    <Container>
      <Menu secondary>
        <SiteHeaderHomeTitle />
        <Menu.Item position="right">
          <SiteHeaderAboutDropdown sectionMap={props.sectionMap} />
          <SiteHeaderSkillsDropdown sectionMap={props.sectionMap} />
          <SiteHeaderProjectsDropdown sectionMap={props.sectionMap} />
          <div className="siteHeaderSmallTitleBar">
            <SiteHeaderSmallBarsDropdown />
          </div>
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
    <Container fluid>
      <CenteredContainer>
        <SiteHeaderSmallTitleMenu />
      </CenteredContainer>
      <CenteredContainer>
        <Menu secondary>
          <Menu.Item>
            <SiteHeaderAboutDropdown sectionMap={props.sectionMap} />
            <SiteHeaderSkillsDropdown sectionMap={props.sectionMap} />
            <SiteHeaderProjectsDropdown sectionMap={props.sectionMap} />
          </Menu.Item>
        </Menu>
      </CenteredContainer>
    </Container>
  );
};

/**
 * The header menu for the website on a small screen
 */
const SiteHeaderSmallTitleMenu = () => {
  return (
    <div className="siteHeaderSmallTitleMenu">
      <div className="siteHeaderSmallTitle">
        <SiteHeaderHomeTitle />
      </div>
      <div className="siteHeaderSmallTitleBar">
        <SiteHeaderSmallBarsDropdown />
      </div>
    </div>
  );
};

const SiteHeaderSmallBarsDropdown = () => {
  return (
    <Dropdown direction="left" icon="bars">
      <Dropdown.Menu>
        <Dropdown.Item>
          <SiteHeaderLinkedInLink />
        </Dropdown.Item>
        <Dropdown.Item>
          <SiteHeaderGitHubLink />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

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
 * Link for my Linked In
 */
const SiteHeaderLinkedInLink = (): JSX.Element => {
  return (
    <Link to="https://www.linkedin.com/in/kyle-humphrey-b1324524a">
      <span className="siteSmallHeaderHeader">Linked In</span>
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
 * Link for my GitHub
 */
const SiteHeaderGitHubLink = (): JSX.Element => {
  return (
    <Link to="https://github.com/kyleuniversities">
      <span className="siteSmallHeaderHeader">GitHub</span>
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
