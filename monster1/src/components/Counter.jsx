import React, { useState } from "react";
import { useReducer } from "react";
import { initialState, counterReducer } from "./counterReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [inputValue, setInputValue] = useState('');

  const handleAddition = () => {
    dispatch({ type: "incrementByAmount", payload: Number(inputValue) });
    setInputValue('')
  }

  const handleSubtraction = () => {
    dispatch({ type: "decrementByAmount", payload: +inputValue });
    setInputValue('')
  };

  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}>Plus</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Minus</button>
      <h1>Counter: {state.count}</h1>
      
      <div>
        <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Enter Amount" />

        <button onClick={handleAddition}>Add</button>
        <button onClick={handleSubtraction}>Subtract</button>
      </div>
    </div>
  );
};

export default Counter;
