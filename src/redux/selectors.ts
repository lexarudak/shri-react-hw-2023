import { GenreList } from "@/app/components/Filter/Filter.const";
import { MovieShort } from "@/model/typesAndInterface";
import { RootState } from "@/redux";

export const cartSelector = (state: RootState): MovieShort[] =>
  state.appSlice.cart;

export const filterNameSelector = (state: RootState): string =>
  state.appSlice.filter.name;

export const filterGenreSelector = (state: RootState): GenreList =>
  state.appSlice.filter.genre;

export const filterCinemaSelector = (state: RootState): string =>
  state.appSlice.filter.cinema;
