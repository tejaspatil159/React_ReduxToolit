import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

const IcecreamView = () => {
  const icecreamSelector = useSelector((state) => state.icecream.noOfIcecream);
  const dispatch = useDispatch();
  return (
    <>
      <div>No of Icecreams : {icecreamSelector}</div>
      <button onClick={() => dispatch(ordered())}>Order</button>
      <button onClick={() => dispatch(restocked(3))}>Restock</button>
    </>
  );
};

export default IcecreamView;
