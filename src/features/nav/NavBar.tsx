import React from "react";
import { Menu, Container } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { MAIN_COLOR, WHITE } from "../../app/common/util";

const linkStyles = {
  color: WHITE
};

const NavBar = () => {
  return (
    <Menu fixed="top" style={{ background: MAIN_COLOR }}>
      <Container>
        <Menu.Item header as={NavLink} exact to="/" style={linkStyles}>
          Countries App
        </Menu.Item>
        <Menu.Item as={NavLink} to="/countries" style={linkStyles}>
          Countries list
        </Menu.Item>
        <Menu.Item as={NavLink} to="/about" style={linkStyles}>
          About
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
