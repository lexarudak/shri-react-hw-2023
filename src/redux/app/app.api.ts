import { Cinemas, Movie, Movies, Review } from "@/model/typesAndInterface";
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
    getMovies: query<Movies, string>({
      query: (id: string) => ({
        url: Path.movies,
        params: {
          cinemaId: id,
        },
      }),
    }),
    getMovie: query<Movie, string>({
      query: (id: string) => ({
        url: Path.movie,
        params: {
          movieId: id,
        },
      }),
    }),
    getReviews: query<Review[], string>({
      query: (id: string) => ({
        url: Path.reviews,
        params: {
          movieId: id,
        },
      }),
    }),
  }),
});

export const {
  useGetCinemasQuery,
  useGetMoviesQuery,
  useLazyGetMoviesQuery,
  useGetMovieQuery,
  useGetReviewsQuery,
} = appApi;
