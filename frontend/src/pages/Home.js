import React, { Component } from 'react';
import SearchForm from '../cmps/SearchForm';
// import { connect } from 'react-redux';

// import { loadReviews, addReview } from '../actions/ReviewActions.js';
// import { loadUsers } from '../actions/UserActions.js';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  state = {};

  componentDidMount() {}

  handleChange = ev => {};

  render() {
    return (
      <div className="home">
        <h1>Welcome Home</h1>
        <Link to="/house">Top Rated</Link>
        <SearchForm></SearchForm>
      </div>
    );
  }
}
