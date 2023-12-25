import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
  const [orderedValue, setOrderedValue] = useState(1);
  const [restockedValue, setRestockedValue] = useState(1);
  const cake = useSelector((state) => state.cake.noOfCakes);
  const dispatch = useDispatch();

  const OrderedHandleChange = (event) => {
    // Extract the input value
    let inputValue = parseInt(event.target.value, 10);

    // Ensure the value is between 0 and 100
    inputValue = Math.min(100, Math.max(0, inputValue));

    setOrderedValue(inputValue);
  };

  const RestockedHandleChange = (event) => {
    // Extract the input value
    let inputValue = parseInt(event.target.value, 10);

    // Ensure the value is between 0 and 100
    inputValue = Math.min(100, Math.max(0, inputValue));

    setRestockedValue(inputValue);
  };
  return (
    <>
      <div>No of Cakes :{cake}</div>
      <input
        min={0}
        max={100}
        type="number"
        value={orderedValue}
        onChange={OrderedHandleChange}
      />
      <button onClick={() => dispatch(ordered(orderedValue))}>Order</button>
      <input
        min={0}
        max={100}
        type="number"
        value={restockedValue}
        onChange={RestockedHandleChange}
      />
      <button onClick={() => dispatch(restocked(restockedValue))}>
        Restock
      </button>
    </>
  );
};

export default CakeView;
