"use client";
import { useGetMoviesQuery } from "@/redux/app/app.api";
import styles from "./MovieContainer.module.scss";
import {
  filterCinemaSelector,
  filterGenreSelector,
  filterNameSelector,
  useAppSelector,
} from "@/redux";
import { Movies } from "@/model/typesAndInterface";
import { Spinner } from "@/components/Spinner/Spinner";
import { FilmCard } from "@/components/FilmCard/FilmCard";
import { GENRE_LIST } from "../Filter/Filter.const";

export const MovieContainer = (): JSX.Element => {
  const { value: filterCinema } = useAppSelector(filterCinemaSelector);
  const { value: filterGenre } = useAppSelector(filterGenreSelector);
  const name = useAppSelector(filterNameSelector);
  const { isFetching, currentData } = useGetMoviesQuery(filterCinema);
  const fillContainer = (data: Movies): JSX.Element[] => {
    const filteredByGenre = filterGenre
      ? data.filter(({ genre }) => genre === filterGenre)
      : data;
    const filteredByName = name
      ? filteredByGenre.filter(({ title }) =>
          title.toLowerCase().includes(name.toLowerCase().trim())
        )
      : filteredByGenre;
    return filteredByName.map(({ title, id, posterUrl, genre }) => {
      const genreRu = GENRE_LIST.find(({ value }) => value === genre);
      return (
        <FilmCard
          key={id}
          movieShort={{
            title,
            id,
            posterUrl,
            genre: genreRu ? genreRu.name : genre,
          }}
        />
      );
    });
  };

  return (
    <div className={styles.movieContainer}>
      {currentData && fillContainer(currentData)}
      {/* {isFetching && (
        <div className={styles.spinnerContainer}>
          <Spinner isSmall />
        </div>
      )} */}
    </div>
  );
};
