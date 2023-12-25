import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
  const [orderedValue, setOrderedValue] = useState(1);
  const cakeSelector = useSelector((state) => state.cake.noOfCakes);
  const dispatch = useDispatch();
  return (
    <>
      <div>No of Cakes :{cakeSelector}</div>
      <input
        type="number"
        value={orderedValue}
        onChange={(e) => setOrderedValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(ordered(orderedValue))}>Ordered</button>
      <button onClick={() => dispatch(restocked(3))}>Restocked</button>
    </>
  );
};

export default CakeView;
