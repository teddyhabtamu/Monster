import React from "react";
import "./Recommended.css";
import Button from "../Button";

const Recommended = () => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button value="All" />
          <Button value="Nike" />
          <Button value="Addidas" />
          <Button value="Puma" />
          <Button value="Vans" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
