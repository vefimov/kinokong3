// @flow
import React, { Component } from 'react';
import { Navbar, FormGroup, FormControl, Button, Glyphicon, Col } from 'react-bootstrap';
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
  viweSearch = () => {
    const { input } = this.state;
    return input ? this.setState({ input: false }) : this.setState({ input: true });
  };

  handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    this.setState({ query: event.currentTarget.value });
  };

  handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.props.history.push(`/search/${this.state.query}`);
  };
  inputSearch() {
    const { query } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <Col xs={10} sm={10} lg={10} md={10}>
          <FormControl type="search" placeholder="Поиск" defaultValue={query} onChange={this.handleChange} required />
        </Col>
        <Col xs={2} sm={2} lg={2} md={2}>
          <Button type="submit">
            <Glyphicon glyph="glyphicon glyphicon-search" />
          </Button>
        </Col>
      </form>
    );
  }

  renderSearch() {
    const { input } = this.state;

    return input ? (
      <div>
        <Navbar.Form pullLeft>
          <Button type="submit" onClick={this.viweSearch}>
            <Glyphicon glyph="glyphicon glyphicon-search" />
          </Button>
        </Navbar.Form>
        {this.inputSearch()}
      </div>
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
