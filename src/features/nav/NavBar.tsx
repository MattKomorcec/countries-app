import React from "react";
import { Menu, Container } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <Menu fixed="top">
      <Container>
        <Menu.Item header as={NavLink} exact to="/">
          Countries App
        </Menu.Item>
        <Menu.Item as={NavLink} to="/countries">
          Countries list
        </Menu.Item>
        <Menu.Item as={NavLink} to="/about">
          About
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
