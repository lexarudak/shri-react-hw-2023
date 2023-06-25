import { Cart, FilterValue, RootState } from "@/redux";

export const initSelector = (state: RootState): boolean => state.appSlice.init;

export const cartSelector = (state: RootState): Cart => state.appSlice.cart;

export const filterNameSelector = (state: RootState): string =>
  state.appSlice.filter.name;

export const filterGenreSelector = (state: RootState): FilterValue =>
  state.appSlice.filter.genre;

export const filterCinemaValueSelector = (state: RootState): string =>
  state.appSlice.filter.cinema.value;

export const filterCinemaSelector = (state: RootState): FilterValue =>
  state.appSlice.filter.cinema;
