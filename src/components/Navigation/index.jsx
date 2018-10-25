import React, { Component } from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import './index.css';

class Navigation extends Component {
  render() {
    return (
      <div className="navbar">
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
                <NavItem href={menuItem.url} key={menuItem.url} eventKey={menuItem.url}>
                  {menuItem.title}{' '}
                </NavItem>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
