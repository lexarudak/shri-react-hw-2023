import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, MAX_TICKETS_IN_CART } from "./app.const";
import { MovieShort } from "@/model/typesAndInterface";
import { FilterValue } from "./app.interface";

export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<MovieShort>): void {
      const { id } = action.payload;
      if (id in state.cart) {
        const value = state.cart[id];
        if (value.amount < MAX_TICKETS_IN_CART) value.amount++;
      } else {
        state.cart[id] = {
          movie: action.payload,
          amount: 1,
        };
      }
    },
    reduceAmount(state, action: PayloadAction<MovieShort>): void {
      const { id } = action.payload;
      if (id in state.cart) {
        const value = state.cart[id];
        if (value.amount > 0) value.amount--;
      } else {
        delete state.cart[id];
      }
    },
    removeItem(state, action: PayloadAction<string>): void {
      delete state.cart[action.payload];
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

export const {
  addToCart,
  reduceAmount,
  removeItem,
  setFilterName,
  setFilterGenre,
  setCinemaName,
} = appSlice.actions;

export default appSlice.reducer;
