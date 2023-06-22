/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Cinemas } from "@/model/typesAndInterface";
import {
  buildCreateApi,
  coreModule,
  fetchBaseQuery,
  reactHooksModule,
} from "@reduxjs/toolkit/query/react";
import { ORIGIN, Path } from "./app.const";

const createApi = buildCreateApi(
  coreModule(),
  reactHooksModule({ unstable__sideEffectsInRender: true })
);

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: ORIGIN,
  }),
  endpoints: ({ query }) => ({
    getCinemas: query<Cinemas, string>({
      query: () => ({
        url: Path.cinemas,
      }),
    }),
  }),
});

export const { useGetCinemasQuery } = appApi;
