import React from "react";
import "./PlanList.css";

import PlanCard from "./PlanCard";

const PlanList = props => {
  return (
    <div className="plan-list">
      {!!props.plans.length ? (
        props.plans.map(plan => <PlanCard key={plan.id} plan={plan} />)
      ) : (
        <div>You have no plans</div>
      )}
    </div>
  );
};

export default PlanList;
