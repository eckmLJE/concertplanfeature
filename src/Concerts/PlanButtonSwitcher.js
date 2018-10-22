import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { StartPlanButton } from "../Buttons/Buttons";
import { ViewPlanButton } from "../Buttons/Buttons";

import { postPlan } from "../actions/plans";
import { navToPlanId } from "../actions/navs";

class PlanButtonSwitcher extends Component {
  checkConcertPlan = () => {
    const concertPlan = this.props.plans.find(
      plan => plan.attributes.tmid === this.props.concert.id
    );
    return concertPlan ? concertPlan.id : false;
  };

  planButtonSwitch = () => {
    const concertPlan = this.checkConcertPlan();
    return concertPlan ? (
      <ViewPlanButton
        navToPlan={() => this.handleNavToPlan(concertPlan)}
        key={this.props.concert.tmid}
      />
    ) : (
      <StartPlanButton
        postPlan={this.handleStartPlan}
        concert={this.props.concert}
        imgUrl={this.props.imgUrl}
        key={this.props.concert.tmid}
      />
    );
  };

  handleStartPlan = e => {
    e.preventDefault();
    const concert = this.props.concert;
    const planData = {
      name: concert.name,
      tmid: concert.id,
      datetime: concert.dates.start.dateTime,
      venue: concert._embedded.venues[0].name,
      imgUrl: this.props.imgUrl,
      creator_id: this.props.currentUser.id
    };
    this.props.postPlan(planData);
  };

  handleNavToPlan = planId => {
    console.log(planId);
    this.props.navToPlanId(planId);
  };

  render() {
    return <Fragment>{this.planButtonSwitch()}</Fragment>;
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  currentUser: state.user.currentUser,
  plans: state.plans.plans
});

const mapDispatchToProps = dispatch => ({
  postPlan: planData => dispatch(postPlan(planData)),
  navToPlanId: planId => dispatch(navToPlanId(planId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanButtonSwitcher);
