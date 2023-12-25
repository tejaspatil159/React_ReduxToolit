import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "./icecreamSlice";

const initialState = {
  noOfIcecream: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.noOfIcecream--;
    },
    restocked: (state, action) => {
      state.noOfIcecream += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state, action) => {
      state.noOfIcecream -= action.payload;
    });
  },
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;
