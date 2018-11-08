// @flow
import React, { Component } from 'react';
import { Nav, NavItem, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';
import './index.css';

type MenuItemType = {
  title: string,
  url: string,
  subItems?: MenuItemType[],
};

type Props = {
  menuItems: MenuItemType[],
};

class Navigation extends Component<Props> {
  render() {
    return (
      <div className="navbar">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <div className="header-section">
                <a href="/">
                  <strong>КиноХалява</strong>
                </a>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              {this.props.menuItems.map(
                menuItem =>
                  menuItem.subItems ? (
                    <NavDropdown id={menuItem.url} key={menuItem.url} title={menuItem.title} eventKey={menuItem.url}>
                      {menuItem.subItems.map(subItem => (
                        <MenuItem key={subItem.url} href={subItem.url}>
                          {subItem.title}
                        </MenuItem>
                      ))}
                    </NavDropdown>
                  ) : (
                    <NavItem key={menuItem.url} eventKey={menuItem.url} href={menuItem.url}>
                      {menuItem.title}
                    </NavItem>
                  ),
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
