"use client";
import { useGetMoviesQuery } from "@/redux/app/app.api";
import styles from "./MovieContainer.module.scss";
import {
  filterCinemaSelector,
  filterGenreSelector,
  filterNameSelector,
  useAppSelector,
} from "@/redux";

import { Spinner } from "@/components/Spinner/Spinner";
import { fillContainer } from "./MovieContainer.helper";
import { useEffect, useState } from "react";

export const MovieContainer = (): JSX.Element => {
  const { value: filterCinema } = useAppSelector(filterCinemaSelector);
  const { value: filterGenre } = useAppSelector(filterGenreSelector);
  const name = useAppSelector(filterNameSelector);
  const { isFetching, currentData } = useGetMoviesQuery(filterCinema);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  useEffect(() => setIsPageLoaded(true), []);

  return (
    <div className={styles.movieContainer}>
      {isPageLoaded &&
        currentData &&
        fillContainer(currentData, filterGenre, name)}
      {isPageLoaded && isFetching && (
        <div className={styles.spinnerContainer}>
          <Spinner isSmall />
        </div>
      )}
    </div>
  );
};
