import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./app.const";
import { MovieShort } from "@/model/typesAndInterface";

export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setCart(state, action: PayloadAction<MovieShort>): void {
      state.cart.push(action.payload);
    },
  },
});

export const { setCart } = appSlice.actions;

export default appSlice.reducer;
