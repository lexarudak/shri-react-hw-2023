import { AppState } from "@/redux/";

export const initialState: AppState = {
  cart: [],
  filter: {
    name: "",
    genre: "",
    cinema: "",
  },
};
