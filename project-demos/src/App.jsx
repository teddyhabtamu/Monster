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

const App = () => {
  console.log(accordionData);
  return (
    <div>
      {/* <Counter/> */}
      {/* <Todo/> */}
      {/* <Meals/> */}
      {/* <Calculator/> */}
      {/* <ToggleBackgroundColor/> */}
      {/* <HiddenSearchBar/> */}
      {/* <Testimonials/> */}
      <div className="accordion"> 
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;
