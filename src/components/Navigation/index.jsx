// @flow
import React, { Component } from 'react';
import Search from '../Search';
import { Nav, NavItem, Navbar, NavDropdown, MenuItem, Button, Glyphicon } from 'react-bootstrap';
import './index.css';

type MenuItemType = {
  title: string,
  url: string,
  subItems?: MenuItemType[],
};

type Props = {
  menuItems: MenuItemType[],
};

type State = {
  showSearch: boolean,
};

class Navigation extends Component<Props, State> {
  state: State = {
    showSearch: false,
  };

  toggleSearch = () => this.setState((state: State) => ({ showSearch: !state.showSearch }));

  render() {
    const { showSearch } = this.state;

    return (
      <div>
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
              <Navbar.Form pullLeft>
                <Button type="submit" onClick={this.toggleSearch}>
                  <Glyphicon glyph="glyphicon glyphicon-search" />
                </Button>
              </Navbar.Form>
            </Navbar.Collapse>
          </Navbar>
        </div>

        {showSearch && (
          <div className="search-panel">
            <Search />
          </div>
        )}
      </div>
    );
  }
}

export default Navigation;
