import React from "react";
import "./Category.css";
import Input from "../../Input";

const Category = ({ handleChange }) => {
  return (
    <>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <div>
          <Input
            handleChange={handleChange}
            value={""}
            title={"All"}
            name={"test"}
          />

          <Input
            handleChange={handleChange}
            value={"Sneakers"}
            title={"Sneakers"}
            name={"test"}
          />
          <Input
            handleChange={handleChange}
            value={"Flats"}
            title={"Flats"}
            name={"test"}
          />
          <Input
            handleChange={handleChange}
            value={"Sandals"}
            title={"Sandals"}
            name={"test"}
          />
          <Input
            handleChange={handleChange}
            value={"Heals"}
            title={"Heals"}
            name={"test"}
          />
        </div>
      </div>
    </>
  );
};

export default Category;
