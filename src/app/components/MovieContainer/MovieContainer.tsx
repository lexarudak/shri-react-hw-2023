"use client";
import { useLazyGetMoviesQuery } from "@/redux/app/app.api";
import styles from "./MovieContainer.module.scss";
import {
  filterCinemaValueSelector,
  filterGenreSelector,
  filterNameSelector,
  useAppSelector,
} from "@/redux";
import { fillContainer } from "./MovieContainer.helper";
import { EMPTY_PAGE_TEXT } from "./MovieContainer.const";
import { LightBanner } from "../LightBanner/LightBanner";
import { Spinner } from "../Spinner/Spinner";
import { useEffect } from "react";

export const MovieContainer = (): JSX.Element => {
  const cinemaId = useAppSelector(filterCinemaValueSelector);
  const { value: filterGenre } = useAppSelector(filterGenreSelector);
  const name = useAppSelector(filterNameSelector);

  const [trigger, { isFetching, currentData }] = useLazyGetMoviesQuery();
  useEffect(() => {
    trigger(cinemaId);
  }, [trigger, cinemaId]);

  const data = currentData && fillContainer(currentData, filterGenre, name);

  return (
    <div className={styles.movieContainer}>
      {!isFetching && data}
      {isFetching && <Spinner isSmall fill />}
      {!data?.length && !isFetching && <LightBanner text={EMPTY_PAGE_TEXT} />}
    </div>
  );
};
