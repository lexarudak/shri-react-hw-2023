"use client";
import classNames from "classnames";
import styles from "./Spinner.module.scss";

export const Spinner = ({ isSmall = false, fill = false }): JSX.Element => {
  return (
    <div className={classNames(fill && styles.fill)}>
      <div className={classNames({ [styles.small]: isSmall }, styles.spinner)}>
        <div /> <div /> <div /> <div /> <div /> <div />
        <div /> <div /> <div /> <div /> <div /> <div />
      </div>
    </div>
  );
};
