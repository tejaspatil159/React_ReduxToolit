import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "./icecreamSlice";

const initialState = {
  noOfIcecream: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state, action) => {
      if (state.noOfIcecream > 0) state.noOfIcecream -= action.payload;
    },
    restocked: (state, action) => {
      if (state.noOfIcecream <= 100) state.noOfIcecream += action.payload;
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
