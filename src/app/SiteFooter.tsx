import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Header, List, Segment } from 'semantic-ui-react';
import { SiteSectionGroupProps } from './SitePage';

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
      sectionKeys={['TECHNOLOGIES', 'ACCOMPLISHMENTS']}
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
      sectionKeys={['PROJECTS', 'WORKS_IN_PROGRESS']}
    />
  );
};

/**
 * The segment for the footer of the website
 */
const SiteFooterSegment = (props: { children: ReactNode }): JSX.Element => {
  const style = {
    paddingTop: '50px',
    paddingBottom: '50px',
    width: '100vw',
    minHeight: '15vh',
    textAlign: 'left',
  };
  return (
    <Segment inverted vertical style={style}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>{props.children}</Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

/**
 * Grid Column for items of the site footer
 */
const SiteFooterGridColumn = (props: SiteSectionGroupProps): JSX.Element => {
  return (
    <Grid.Column width={4}>
      <Header inverted as="h4" content={props.title} />
      <List link inverted>
        {props.sectionKeys.map((key) => (
          <SiteFooterListItem siteSection={props.sectionMap[key]} />
        ))}
      </List>
    </Grid.Column>
  );
};

/**
 * List Item for Site Footer
 */
const SiteFooterListItem = (props: { siteSection: any }): JSX.Element => {
  return (
    <List.Item as={Link} to={props.siteSection.url}>
      {props.siteSection.title}
    </List.Item>
  );
};
