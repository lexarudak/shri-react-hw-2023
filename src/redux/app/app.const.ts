import { ALL_CINEMAS, GenreList } from "@/app/components/Filter/Filter.const";
import { AppState } from "@/redux/";

export const initialState: AppState = {
  cart: [],
  filter: {
    name: "",
    genre: GenreList.all,
    cinema: ALL_CINEMAS,
  },
};
