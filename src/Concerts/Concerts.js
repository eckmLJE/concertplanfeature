import React, { Component } from "react";
import { connect } from "react-redux";
import "./Concerts.css";

import { fetchConcerts } from "../actions/concerts";
import { fetchPlans } from "../actions/plans";

import ConcertList from "./ConcertList";
import Spinner from "../Spinner/Spinner.js";

class Concerts extends Component {
  componentDidMount = () => {
    if (this.props.loggedIn) this.props.fetchPlans();
    this.props.fetchConcerts("KovZ917A3Y7");
  };

  render() {
    return (
      <section className="concerts">
        {this.props.concerts.length ? (
          <ConcertList concerts={this.props.concerts} />
        ) : (
          <Spinner />
        )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  concerts: state.concerts.concerts,
  loggedIn: state.user.loggedIn
});

const mapDispatchToProps = dispatch => ({
  fetchConcerts: venueId => dispatch(fetchConcerts(venueId)),
  fetchPlans: () => dispatch(fetchPlans())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Concerts);
