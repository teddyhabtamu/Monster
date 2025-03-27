import React, { useState } from "react";
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

import products from "./db/data";
import Card from "./components/E-commerce/Card";

const App = () => {

  const [selectedCategory, setSelectedCategory] = useState(null);

  const [query, setQuery] = useState("");
  console.log(query)

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

function filteredData(products, selected, query) {
  let filteredProducts = products;

  // Filter by query if provided
  if (query) {
    filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  if (selected) {
    filteredProducts = filteredProducts.filter(
      ({ category, color, company, newPrice, title }) =>
        category === selected ||
        color === selected ||
        company === selected ||
        newPrice === selected ||
        title === selected
    );
  }

  // Map to Card components
  return filteredProducts.map(
    ({ img, title, star, reviews, prevPrice, newPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
      />
    )
  );
}

  const result = filteredData(products, selectedCategory, query)

  console.log(result)

  return (
    <div>
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
      <Sidebar handleChange={handleChange} />

      <Navigation query={query} handleInputChange={handleInputChange} />

      <Recommended handleClick={handleClick} />

      <Products result={result} />
    </div>
  );
};

export default App;
