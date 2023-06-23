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
import { LightBanner } from "@/components/LightBanner/LightBanner";
import { EMPTY_PAGE_TEXT } from "./MovieContainer.const";

export const MovieContainer = (): JSX.Element => {
  const { value: filterCinema } = useAppSelector(filterCinemaSelector);
  const { value: filterGenre } = useAppSelector(filterGenreSelector);
  const name = useAppSelector(filterNameSelector);
  const { isFetching, currentData } = useGetMoviesQuery(filterCinema);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  useEffect(() => setIsPageLoaded(true), []);
  const data = currentData && fillContainer(currentData, filterGenre, name);

  return (
    <div className={styles.movieContainer}>
      {isPageLoaded && !isFetching && data}
      {isPageLoaded && isFetching && (
        <div className={styles.spinnerContainer}>
          <Spinner isSmall />
        </div>
      )}
      {!data?.length && !isFetching && <LightBanner text={EMPTY_PAGE_TEXT} />}
    </div>
  );
};
