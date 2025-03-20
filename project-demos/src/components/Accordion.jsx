import React from "react";
import { useState } from "react";
import "../style.css"

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return <section className="accordion-card" key={Math.random()}>
    <div className="header" onClick={() => setIsActive(!isActive)}>
      <div>{title}</div>
      <p className="icon">{isActive ? '-': '+'}</p>
    </div>
    <p className="card-info">{isActive ? content : ""}</p>
  </section>;
};

export default Accordion;
