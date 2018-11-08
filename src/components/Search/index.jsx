// @flow
import React, { Component } from 'react';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
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
};

class Search extends Component<Props, State> {
  state = {
    query: '',
  };

  handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    this.setState({ query: event.currentTarget.value });
  };

  handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.props.history.push(`/search/${this.state.query}`);
  };

  render() {
    const { query } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <Navbar.Form pullLeft>
          <FormGroup>
            <FormControl type="search" placeholder="Поиск" defaultValue={query} onChange={this.handleChange} required />
          </FormGroup>{' '}
          <Button type="submit">Поиск</Button>
        </Navbar.Form>
      </form>
    );
  }
}

export default withRouter(Search);
