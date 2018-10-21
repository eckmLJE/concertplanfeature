import React, { Component } from "react";
import { connect } from "react-redux";
import "./Concerts.css";

import { fetchConcerts } from "../actions/concerts";

import ConcertList from "./ConcertList";
import Spinner from "../Spinner/Spinner.js";

class Concerts extends Component {
  componentDidMount = () => {
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
  concerts: state.concerts.concerts
});

const mapDispatchToProps = dispatch => ({
  fetchConcerts: venueId => dispatch(fetchConcerts(venueId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Concerts);
