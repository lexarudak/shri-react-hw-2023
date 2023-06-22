"use client";
import classNames from "classnames";
import {
  CINEMA,
  CINEMA_PLACEHOLDER,
  GENRE,
  GENRE_PLACEHOLDER,
  NAME,
  NAME_PLACEHOLDER,
  TITLE,
} from "./Filter.const";
import styles from "./Filter.module.scss";
import { useState } from "react";
import {
  filterNameSelector,
  setFilterName,
  useAppDispatch,
  useAppSelector,
} from "@/redux";

export const Filter = (): JSX.Element => {
  const [isGenreShow, setIsGenreShow] = useState(false);
  const [isCinemaShow, setIsCinemaShow] = useState(false);
  const dispatch = useAppDispatch();
  const filterName = useAppSelector(filterNameSelector);

  const onClickGenre = (): void => {
    if (!isGenreShow)
      document.addEventListener("click", () => setIsGenreShow(false), {
        once: true,
      });
    setIsGenreShow(!isGenreShow);
  };
  const onClickCinema = (): void => {
    if (!isCinemaShow)
      document.addEventListener("click", () => setIsCinemaShow(false), {
        once: true,
      });
    setIsCinemaShow(!isCinemaShow);
  };

  return (
    <aside className={styles.filter}>
      <h2 className={styles.title}>{TITLE}</h2>
      <form className={styles.form}>
        <label className={styles.label}>{NAME}</label>
        <input
          className={classNames(styles.input)}
          type="text"
          placeholder={NAME_PLACEHOLDER}
          value={filterName}
          onChange={(e) => dispatch(setFilterName(e.target.value))}
        />
        <p className={styles.label}>{GENRE}</p>
        <div
          className={classNames(
            styles.input,
            styles.selectInput,
            isGenreShow && styles.show
          )}
          onClick={onClickGenre}
        >
          <p className={classNames(styles.selectText)}>{GENRE_PLACEHOLDER}</p>
          <div className={styles.btnInput} />
        </div>
        <p className={styles.label}>{CINEMA}</p>
        <div
          className={classNames(
            styles.input,
            styles.selectInput,
            isCinemaShow && styles.show
          )}
          onClick={onClickCinema}
        >
          <p className={classNames(styles.selectText)}>{CINEMA_PLACEHOLDER}</p>
          <div className={styles.btnInput} />
        </div>
      </form>
    </aside>
  );
};
