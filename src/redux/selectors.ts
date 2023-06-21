import { MovieShort } from "@/model/typesAndInterface";
import { RootState } from "@/redux";

export const cartSelector = (state: RootState): MovieShort[] =>
  state.appSlice.cart;
