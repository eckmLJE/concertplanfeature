import React from "react";
import "./PlanList.css";

import PlanCard from "./PlanCard";
import Spinner from "../Spinner/Spinner";

const PlanList = props => {
  return (
    <div className="plan-list">
      {!!props.plans.length ? (
        props.plans.map(plan => <PlanCard key={plan.id} plan={plan} />)
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default PlanList;
