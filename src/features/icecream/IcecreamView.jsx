import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

const IcecreamView = () => {
  let [orderedValue, setOrderedValue] = useState(1);
  const [restockedValue, setRestockedValue] = useState(1);
  const icecream = useSelector((state) => state.icecream.noOfIcecream);
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
      <div>No of Icecreams : {icecream}</div>
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

export default IcecreamView;
