"use client";
import {
  FilterValue,
  filterCinemaSelector,
  filterGenreSelector,
  filterNameSelector,
  setCinemaName,
  setFilterGenre,
  setFilterName,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import classNames from "classnames";
import {
  ALL_CINEMAS,
  CINEMA,
  CINEMA_PLACEHOLDER,
  GENRE,
  GENRE_LIST,
  GENRE_PLACEHOLDER,
  NAME,
  NAME_PLACEHOLDER,
  TITLE,
} from "./Filter.const";
import styles from "./Filter.module.scss";
import { Select } from "./Select/Select";
import { ChangeEvent } from "react";
import { useGetCinemasQuery } from "@/redux/app/app.api";
import { Cinemas } from "@/model/typesAndInterface";

export const Filter = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const filterName = useAppSelector(filterNameSelector);
  const filterGenre = useAppSelector(filterGenreSelector);
  const filterCinema = useAppSelector(filterCinemaSelector);
  const { data } = useGetCinemasQuery("");

  const getCinemaNames = (cinemas: Cinemas): FilterValue[] =>
    cinemas.map(({ name, id }) => ({ name, value: id }));

  const inputOnClick = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setFilterName(e.target.value));
  };

  return (
    <aside className={styles.filter}>
      <h2 className={styles.title}>{TITLE}</h2>
      <div className={styles.form}>
        <label className={styles.label}>{NAME}</label>
        <input
          className={classNames(styles.input)}
          type="text"
          placeholder={NAME_PLACEHOLDER}
          value={filterName}
          onChange={(e) => inputOnClick(e)}
        />
        <Select
          label={GENRE}
          placeholder={GENRE_PLACEHOLDER}
          filterValue={filterGenre}
          setter={setFilterGenre}
          list={GENRE_LIST}
        />
        <Select
          label={CINEMA}
          placeholder={CINEMA_PLACEHOLDER}
          filterValue={filterCinema}
          setter={setCinemaName}
          list={data ? [ALL_CINEMAS, ...getCinemaNames(data)] : [ALL_CINEMAS]}
        />
      </div>
    </aside>
  );
};
