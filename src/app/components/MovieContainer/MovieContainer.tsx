"use client";
import { useGetMoviesQuery } from "@/redux/app/app.api";
import styles from "./MovieContainer.module.scss";
import { filterCinemaSelector, useAppSelector } from "@/redux";
import { Movies } from "@/model/typesAndInterface";
import { Spinner } from "@/components/Spinner/Spinner";
import { useEffect, useState } from "react";

export const MovieContainer = (): JSX.Element => {
  // const [isComponentLoad, setIsComponentLoad] = useState(false);
  // useEffect(() => setIsComponentLoad(true), []);

  const { value } = useAppSelector(filterCinemaSelector);
  const { error, isFetching, currentData } = useGetMoviesQuery(value);
  const fillContainer = (data: Movies): JSX.Element[] =>
    data.map(({ title }, ind) => <div key={ind}>{title}</div>);
  return (
    <div className={styles.movieContainer}>
      {currentData && fillContainer(currentData)}
      {isFetching && (
        <div className={styles.spinnerContainer}>
          <Spinner isSmall />
        </div>
      )}
    </div>
  );
};
