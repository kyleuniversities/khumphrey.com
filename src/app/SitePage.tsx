import { ReactNode } from 'react';
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

export const SitePage = (props: { children: ReactNode }): JSX.Element => {
  return (
    <Container fluid style={{ textAlign: 'center' }}>
      <SiteHeaderContainer />
      {props.children}
      <SiteFooter />
    </Container>
  );
};

const SiteHeaderContainer = (): JSX.Element => {
  return (
    <Container>
      <SiteHeaderSuperMenu />
    </Container>
  );
};

const SiteHeaderSuperMenu = (): JSX.Element => {
  return (
    <Menu secondary>
      <Menu.Item as={Link} to="/home">
        <Icon name="home" size="big" />
      </Menu.Item>
      <Menu.Item as={Link} to="/home">
        <h1>Kyle Universities</h1>
      </Menu.Item>
      <Menu.Item position="right">
        <Dropdown inline item text="About">
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/sections/about-me">
              About Me
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/pdfs/resume">
              Resume
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/pdfs/curriculum-vitae">
              Curriculum Vitae
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown inline item text="Skills">
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/sections/technologies">
              Technologies I Have Experience In
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/sections/accomplishments">
              Accomplishments
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown inline item text="Projects">
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/sections/project-list">
              Projects
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/sections/works-in-progress">
              Works in Progress
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Link to="https://www.linkedin.com/in/kyle-humphrey-b1324524a">
          <Icon color="black" name="linkedin" size="big" />
        </Link>
        <Link to="https://github.com/kyleuniversities">
          <Icon color="black" name="github" size="big" />
        </Link>
      </Menu.Item>
    </Menu>
  );
};

const SiteFooter = (): JSX.Element => {
  return (
    <SiteFooterSegment>
      <SiteFooterGridColumn headerContent="About">
        <List.Item as={Link} to="/sections/about-me">
          About Me
        </List.Item>
        <List.Item as={Link} to="/pdfs/resume">
          Resume
        </List.Item>
        <List.Item as={Link} to="/pdfs/curriculum-vitae">
          Curriculum Vitae
        </List.Item>
      </SiteFooterGridColumn>
      <SiteFooterGridColumn headerContent="Skills">
        <List.Item as={Link} to="/sections/technologies">
          Technologies I Have Experience In
        </List.Item>
        <List.Item as={Link} to="/sections/accomplishments">
          Accomplishments
        </List.Item>
      </SiteFooterGridColumn>
      <SiteFooterGridColumn headerContent="Projects">
        <List.Item as={Link} to="/sections/project-list">
          Projects
        </List.Item>
        <List.Item as={Link} to="/sections/works-in-progress">
          Works in Progress
        </List.Item>
      </SiteFooterGridColumn>
    </SiteFooterSegment>
  );
};

const SiteFooterSegment = (props: { children: ReactNode }): JSX.Element => {
  const style = {
    paddingTop: '50px',
    paddingBottom: '50px',
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

const SiteFooterGridColumn = (props: {
  headerContent: string;
  children: ReactNode;
}): JSX.Element => {
  return (
    <Grid.Column width={4}>
      <Header inverted as="h4" content={props.headerContent} />
      <List link inverted>
        {props.children}
      </List>
    </Grid.Column>
  );
};
