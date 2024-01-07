import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, List } from 'semantic-ui-react';
import { SiteSectionGroupProps } from './SitePage';
import './index.css';

/**
 * The footer for the website
 */
export const SiteFooter = (props: { sectionMap: any }): JSX.Element => {
  return (
    <SiteFooterSegment>
      <SiteFooterGridAboutColumn sectionMap={props.sectionMap} />
      <SiteFooterGridSkillsColumn sectionMap={props.sectionMap} />
      <SiteFooterGridProjectColumn sectionMap={props.sectionMap} />
    </SiteFooterSegment>
  );
};

/**
 * Site Footer Column for About Content
 */
const SiteFooterGridAboutColumn = (props: { sectionMap: any }): JSX.Element => {
  return (
    <SiteFooterGridColumn
      title="About"
      sectionMap={props.sectionMap}
      sectionKeys={['ABOUT_ME', 'RESUME', 'CURRICULUM_VITAE']}
    />
  );
};

/**
 * Site Footer Column for Skills Content
 */
const SiteFooterGridSkillsColumn = (props: {
  sectionMap: any;
}): JSX.Element => {
  return (
    <SiteFooterGridColumn
      title="Skills"
      sectionMap={props.sectionMap}
      sectionKeys={['TECHNOLOGY_OVERVIEW', 'TECHNOLOGY_PAGES', 'AI_SKILLS']}
    />
  );
};

/**
 * Site Footer Column for Project Content
 */
const SiteFooterGridProjectColumn = (props: {
  sectionMap: any;
}): JSX.Element => {
  return (
    <SiteFooterGridColumn
      title="Projects"
      sectionMap={props.sectionMap}
      sectionKeys={['PROJECTS', 'ACCOMPLISHMENTS']}
    />
  );
};

/**
 * The segment for the footer of the website
 */
const SiteFooterSegment = (props: { children: ReactNode }): JSX.Element => {
  return (
    <div className="siteFooterSegment">
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>{props.children}</Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

/**
 * Grid Column for items of the site footer
 */
const SiteFooterGridColumn = (props: SiteSectionGroupProps): JSX.Element => {
  return (
    <Grid.Column width={5}>
      <SiteFooterGridColumnHeader title={props.title} />
      <List link inverted>
        {props.sectionKeys.map((key) => (
          <SiteFooterListItem siteSection={props.sectionMap[key]} />
        ))}
      </List>
    </Grid.Column>
  );
};

/**
 * Grid Column Header for items of the site footer
 */
const SiteFooterGridColumnHeader = (props: { title: string }): JSX.Element => {
  return <span className="siteFooterGridColumnHeader">{props.title}</span>;
};

/**
 * List Item for Site Footer
 */
const SiteFooterListItem = (props: { siteSection: any }): JSX.Element => {
  return (
    <div className="siteFooterListItemContainer">
      <List.Item as={Link} to={props.siteSection.url}>
        <span className="siteFooterListItem">{props.siteSection.title}</span>
      </List.Item>
    </div>
  );
};
