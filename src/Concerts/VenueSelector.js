import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "./VenueSelector.css";

import { fetchConcerts } from "../actions/concerts";
import { VenueSelectButton } from "../Buttons/Buttons";

class VenueSelector extends Component {
  constructor(props) {
    super(props);
    this.state = { activeVenue: "theAnthem" };
    this.venues = {
      rockAndRollHotel: "KovZpZAEk7aA",
      nineThirtyClub: "KovZpZA7knFA",
      theAnthem: "KovZ917A3Y7",
      echoStage: "KovZpZAadt7A",
      blackCat: "KovZpZA1k1IA"
    };
  }

  handleVenueSelect = e => {
    e.preventDefault();
    const venueName = e.target.getAttribute("name");
    this.props.fetchConcerts(this.venues[venueName]);
    this.setState({ activeVenue: venueName });
  };

  checkActiveVenue = name => {
    return this.state.activeVenue === name ? "" : " venue-inactive";
  };

  render() {
    return (
      <Fragment>
        <VenueSelectButton
          venueSelect={this.handleVenueSelect}
          venueName="theAnthem"
          stringName="The Anthem"
          activeClass={this.checkActiveVenue("theAnthem")}
        />
        <VenueSelectButton
          venueSelect={this.handleVenueSelect}
          venueName="nineThirtyClub"
          stringName="9:30 Club"
          activeClass={this.checkActiveVenue("nineThirtyClub")}
        />
        <VenueSelectButton
          venueSelect={this.handleVenueSelect}
          venueName="echoStage"
          stringName="Echostage"
          activeClass={this.checkActiveVenue("echoStage")}
        />
        <VenueSelectButton
          venueSelect={this.handleVenueSelect}
          venueName="blackCat"
          stringName="Black Cat"
          activeClass={this.checkActiveVenue("blackCat")}
        />
        <VenueSelectButton
          venueSelect={this.handleVenueSelect}
          venueName="rockAndRollHotel"
          stringName="Rock and Roll Hotel"
          activeClass={this.checkActiveVenue("rockAndRollHotel")}
        />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchConcerts: venueId => dispatch(fetchConcerts(venueId))
});

export default connect(
  null,
  mapDispatchToProps
)(VenueSelector);
