import React, { Component } from "react";
import { connect } from "react-redux";
import "./InstructionsModal.css";

import { handleWelcomeModal } from "../actions/navs";
import { pingServer } from "../actions/heroku";

class InstructionsModal extends Component {
  componentDidMount = () => this.props.pingServer();

  checkActive = () =>
    this.props.modalActive ? "instructions-modal" : "instructions-hidden";

  handleClose = () => this.props.disableModal();

  render() {
    return (
      <div className={this.checkActive()}>
        <div className="instructions-content">
          <h1>Welcome to ConcertPlan</h1>
          <p>ConcertPlan is a portfolio piece developed by Lucas Eckman.</p>
          <p>
            It demonstrates technologies including React + Redux, Rails,
            JWT/bcrypt authentication, HTML5 and CSS3.
          </p>
          <p>
            In a moment you'll be able to log in as sample users in a friend
            group and participate in some concert planning!
          </p>
          <p>
            <strong>
              The Rails back-end is hosted on Heroku {`(free)`}, which can
              sometimes take 10-15 seconds to spool up. Thanks for your
              patience!
            </strong>
          </p>
          {this.props.herokuLoaded ? (
            <div className="instr-button">
              <button onClick={this.handleClose}>Get Started</button>
            </div>
          ) : (
            <div className="instr-button">
              <button disabled>Please Wait...</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modalActive: state.navs.modalActive,
  herokuLoaded: state.heroku.herokuLoaded
});

const mapDispatchToProps = dispatch => ({
  disableModal: () => dispatch(handleWelcomeModal()),
  pingServer: () => dispatch(pingServer())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InstructionsModal);
