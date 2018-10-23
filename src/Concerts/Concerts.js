import React, { Component } from "react";
import { connect } from "react-redux";
import "./Concerts.css";

import { fetchConcerts } from "../actions/concerts";
import { fetchPlans } from "../actions/plans";

import ConcertList from "./ConcertList";
import Spinner from "../Spinner/Spinner.js";
import VenueSelector from "./VenueSelector";

class Concerts extends Component {
  componentDidMount = () => {
    if (this.props.loggedIn) this.props.fetchPlans();
    this.props.fetchConcerts("KovZ917A3Y7");
  };

  render() {
    return (
      <section className="concerts">
        <div
          style={{
            display: "flex",
            width: "90%",
            maxWidth: "700px",
            flexDirection: "row",
            margin: "auto",
            paddingTop: "20px",
            paddingBottom: "20px",
            borderBottom: "1px solid silver"
          }}
        >
          <VenueSelector />
        </div>
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
