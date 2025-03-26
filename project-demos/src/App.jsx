import React from "react";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import Meals from "./components/Meals";
import Calculator from "./components/Calculator";
import ToggleBackgroundColor from "./components/ToggleBackgroundColor";
import HiddenSearchBar from "./components/HiddenSearchBar";
import Testimonials from "./components/Testimonials";
import { accordionData } from "./utils/content";
import Accordion from "./components/Accordion";
import Form from "./components/Form";
import Navigation from "./components/E-commerce/Navigation/Nav";
import Products from "./components/E-commerce/Products/Products";
import Recommended from "./components/E-commerce/Recommended/Recommended";
import "./index.css";
import Sidebar from "./components/E-commerce/Sidebar/Sidebar";

const App = () => {
  // console.log(accordionData);
  return (
    <>
      {/* <Counter />
      <Todo />
      <Meals />
      <Calculator />
      <ToggleBackgroundColor />
      <HiddenSearchBar />
      <Testimonials />
      <div className="accordion"> 
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
      <Form /> */}

      <Navigation />

      <Sidebar />

      <Recommended />

      <Products />
    </>
  );
};

export default App;
