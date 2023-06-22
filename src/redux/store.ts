/* eslint-disable @typescript-eslint/explicit-function-return-type */
import appSlice from "@/redux/app/app.slice";
import { configureStore } from "@reduxjs/toolkit";
import { appApi } from "./app/app.api";

export const store = configureStore({
  reducer: {
    appSlice,
    [appApi.reducerPath]: appApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appApi.middleware),
});
