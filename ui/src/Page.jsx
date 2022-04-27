/* eslint-disable react/jsx-no-target-blank */
/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';

import {
  Navbar, Nav, NavItem,
  Grid,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Routing from './Routing.jsx';

function NavBar() {
  return (
    <Navbar fluid>
      <Navbar.Header>
        <Navbar.Brand>My Company Inventory</Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer exact to="/">
          <NavItem>Home</NavItem>
        </LinkContainer>
        <LinkContainer to="/products">
          <NavItem>List of Products</NavItem>
        </LinkContainer>
        <LinkContainer to="/about">
            <NavItem>About</NavItem>
        </LinkContainer>

      </Nav>
    </Navbar>
  );
}

function Footer() {
  return (
    <small>
      <hr />
      <p className="text-center">
        Source code available at this
        {' '}
        <a href="https://github.com/saicharan888/Assignment_7.git" target="_blank">
          GitHub repository
        </a>
      </p>
    </small>
  );
}


export default function Page() {
  return (
    <Grid fluid>
      <NavBar />
      <Routing />
      <Footer />
    </Grid>
  );
}
