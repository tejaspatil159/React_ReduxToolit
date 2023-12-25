import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  noOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state, action) => {
      if (state.noOfCakes > 0) state.noOfCakes -= action.payload;
    },
    restocked: (state, action) => {
      if (state.noOfCakes <= 100) state.noOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
