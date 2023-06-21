import { RootState } from "@/redux";

export const operationSelector = (state: RootState): string[] =>
  state.appSlice.cart;
