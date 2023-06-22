import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./app.const";
import { MovieShort } from "@/model/typesAndInterface";
import { FilterValue } from "./app.interface";

export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setCart(state, action: PayloadAction<MovieShort>): void {
      state.cart.push(action.payload);
    },
    setFilterName(state, action: PayloadAction<string>): void {
      state.filter.name = action.payload;
    },
    setFilterGenre(state, action: PayloadAction<FilterValue>): void {
      state.filter.genre = action.payload;
    },
    setCinemaName(state, action: PayloadAction<FilterValue>): void {
      state.filter.cinema = action.payload;
    },
  },
});

export const { setCart, setFilterName, setFilterGenre, setCinemaName } =
  appSlice.actions;

export default appSlice.reducer;
