import { ALL_CINEMAS, GENRE_LIST } from "@/app/components/Filter/Filter.const";
import { AppState } from "@/redux/";

export const ORIGIN = "http://localhost:3001/api/";

export const initialState: AppState = {
  cart: [],
  filter: {
    name: "",
    genre: GENRE_LIST[0],
    cinema: ALL_CINEMAS,
  },
};

export const enum Path {
  cinemas = "/cinemas",
}
