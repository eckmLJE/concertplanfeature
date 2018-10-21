import React from "react";
import "./Home.css";

import InstructionsModal from "./InstructionsModal";
import UserPanel from "./UserPanel";

const Home = () => {
  return (
    <section className="home">
      <InstructionsModal />
      <UserPanel />
    </section>
  );
};

export default Home;
