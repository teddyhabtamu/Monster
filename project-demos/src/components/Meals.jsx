import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../style.css";

const Meals = () => {
  const [items, setItems] = useState([]);
  console.log(items);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => setItems(res.data.meals))
      .catch((err) => console.log(err));
  }, []);

  const itemsList = items.map((item) => (
    <section className="card">
      <img src={item.strMealThumb} alt="strMeal" />
      <section className="content">
        <p key={item.idMeal}>{item.strMeal}</p>
        <p>#{item.idMeal}</p>
      </section>
    </section>
  ));

  return <div className="items-container">{itemsList}</div>;
};

export default Meals;
