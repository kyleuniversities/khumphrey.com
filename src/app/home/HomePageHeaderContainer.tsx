import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export const HomePageHeaderContainer = (): JSX.Element => {
  return (
    <Menu secondary>
      <Menu.Item as={Link} to="/">
        <Icon name="home" size="big" />
      </Menu.Item>
      <Menu.Item as={Link} to="/">
        <h1>Kyle Universities</h1>
      </Menu.Item>
      <Menu.Item position="right">
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
