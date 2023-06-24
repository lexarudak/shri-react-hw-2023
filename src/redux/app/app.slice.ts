import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, MAX_TICKETS_IN_CART } from "./app.const";
import { MovieShort } from "@/model/typesAndInterface";
import { Cart, Filter, FilterValue } from "./app.interface";

export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setInit(state): void {
      state.init = false;
    },
    setCart(state, action: PayloadAction<Cart>) {
      state.cart = action.payload;
    },
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
        if (value.amount > 1) {
          value.amount--;
        } else {
          delete state.cart[id];
        }
      }
    },
    removeItem(state, action: PayloadAction<string>): void {
      delete state.cart[action.payload];
    },
    setFilter(state, action: PayloadAction<Filter>): void {
      state.filter = action.payload;
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
  setInit,
  setFilter,
  setCart,
} = appSlice.actions;

export default appSlice.reducer;
