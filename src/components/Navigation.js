import React, { Component } from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">HALYAVA-MOVIES</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {this.props.menuItems.map(menuItem => (
              <NavItem eventKey={menuItem.url} href={menuItem.url}>
                {menuItem.title}
              </NavItem>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
