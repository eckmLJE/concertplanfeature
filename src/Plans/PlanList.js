import React from "react";
import "./PlanList.css";

import PlanCard from "./PlanCard";

const PlanList = props => {
  return (
    <div className="plan-list">
      {!!props.plans.length ? (
        props.plans.map(plan => <PlanCard key={plan.id} plan={plan} />)
      ) : (
        <div>Plans are loading...</div>
      )}
    </div>
  );
};

export default PlanList;
