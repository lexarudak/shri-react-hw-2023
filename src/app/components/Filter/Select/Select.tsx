"use client";
import classNames from "classnames";
import styles from "./Select.module.scss";
import { FilterValue, useAppDispatch } from "@/redux";
import { useState } from "react";
import { nextClickClose } from "@/model/helper";
import { SelectProps } from "./Select.interface";

export function Select<T extends string>({
  label,
  placeholder,
  filterValue: { name },
  setter,
  list,
}: SelectProps<FilterValue, T>): JSX.Element {
  const dispatch = useAppDispatch();
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [{ name: initName }] = list;

  // isSelectOpen
  //   ? document.body.classList.add("block")
  //   : document.body.classList.remove("block");

  const onClickSelect = (): void => {
    if (!isSelectOpen) nextClickClose(setIsSelectOpen);
    setIsSelectOpen(!isSelectOpen);
  };

  const onClickItem = (item: FilterValue): void => {
    dispatch(setter(item));
  };

  const fillList = (list: FilterValue[]): JSX.Element => (
    <ul className={styles.list}>
      {list.map((item, ind) => (
        <li className={styles.item} key={ind} onClick={() => onClickItem(item)}>
          {item.name}
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
            name === initName && styles.empty
          )}
        >
          {name === initName ? placeholder : name}
        </p>
        <div className={styles.btnInput} />
      </div>
      {isSelectOpen && fillList(list)}
    </div>
  );
}
