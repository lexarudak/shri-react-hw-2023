import { MovieShort } from "@/model/typesAndInterface";
import { FilterValue, RootState } from "@/redux";

export const cartSelector = (state: RootState): MovieShort[] =>
  state.appSlice.cart;

export const filterNameSelector = (state: RootState): string =>
  state.appSlice.filter.name;

export const filterGenreSelector = (state: RootState): FilterValue =>
  state.appSlice.filter.genre;

export const filterCinemaSelector = (state: RootState): FilterValue =>
  state.appSlice.filter.cinema;
