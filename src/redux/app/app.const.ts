import { ALL_CINEMAS, GENRE_LIST } from "@/app/components/Filter/Filter.const";
import { AppState } from "@/redux/";

export const ORIGIN = "http://localhost:3001/api/";

export const MAX_TICKETS_IN_CART = 30;

export const initialState: AppState = {
  init: true,
  cart: {},
  filter: {
    name: "",
    genre: GENRE_LIST[0],
    cinema: ALL_CINEMAS,
  },
};

export const enum Path {
  cinemas = "/cinemas",
  movies = "/movies",
  movie = "/movie",
  reviews = "/reviews",
}
