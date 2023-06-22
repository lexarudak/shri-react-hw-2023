"use client";
import classNames from "classnames";
import styles from "./Select.module.scss";
import { useAppDispatch } from "@/redux";
import { useState } from "react";
import { nextClickClose } from "@/model/helper";
import { SelectProps } from "./Select.interface";

export function Select<P, T extends string>({
  label,
  placeholder,
  value,
  setter,
  list,
}: SelectProps<P, T>): JSX.Element {
  const dispatch = useAppDispatch();
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [allSelect] = list;

  const onClickSelect = (): void => {
    if (!isSelectOpen) nextClickClose(setIsSelectOpen);
    setIsSelectOpen(!isSelectOpen);
  };

  const fillList = (list: string[]): JSX.Element => (
    <ul className={styles.list}>
      {list.map((item, ind) => (
        <li
          className={styles.item}
          key={ind}
          onClick={() => dispatch(setter(item as P))}
        >
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div className={styles.select}>
      <p className={styles.label}>{label}</p>
      <div
        className={classNames(styles.input, isSelectOpen && styles.open)}
        onClick={onClickSelect}
      >
        <p
          className={classNames(
            styles.selectText,
            value === allSelect && styles.empty
          )}
        >
          {value === allSelect ? placeholder : value}
        </p>
        <div className={styles.btnInput} />
      </div>
      {isSelectOpen && fillList(list)}
    </div>
  );
}
