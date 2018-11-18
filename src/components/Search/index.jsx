// @flow
import React, { Component } from 'react';
import { Navbar, FormGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import './index.css';

type MenuItemType = {
  title: string,
  url: string,
  subItems?: MenuItemType[],
};

type Props = {
  menuItems: MenuItemType[],
  history: Array<any>,
};

type State = {
  query: string,
  input: boolean,
};

class Search extends Component<Props, State> {
  state = {
    query: '',
    input: false,
  };

  handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    this.setState({ query: event.currentTarget.value });
  };

  handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.props.history.push(`/search/${this.state.query}`);
  };
  viweSearch = () => {
    const { input, query } = this.state;
    return input ? this.setState({ input: false }) : this.setState({ input: true });
  };

  renderSearch() {
    const { query, input } = this.state;

    return input ? (
      <form onSubmit={this.handleSubmit}>
        <Navbar.Form pullLeft>
          <FormGroup>
            <FormControl type="search" placeholder="Поиск" defaultValue={query} onChange={this.handleChange} required />
          </FormGroup>{' '}
          <Button type="submit" onClick={this.viweSearch}>
            <Glyphicon glyph="glyphicon glyphicon-search" />
          </Button>
        </Navbar.Form>
      </form>
    ) : (
      <Navbar.Form pullLeft>
        <Button type="submit" onClick={this.viweSearch}>
          <Glyphicon glyph="glyphicon glyphicon-search" />
        </Button>
      </Navbar.Form>
    );
  }

  render() {
    return this.renderSearch();
  }
}

export default withRouter(Search);
