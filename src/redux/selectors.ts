import { RootState } from "@/redux";

export const cartSelector = (state: RootState): string[] => state.appSlice.cart;
