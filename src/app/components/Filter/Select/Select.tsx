"use client";
import classNames from "classnames";
import styles from "./Select.module.scss";
import { FilterValue, useAppDispatch } from "@/redux";
import { useRef, useState } from "react";
import { nextActionClose } from "@/model/helper";
import { SelectProps } from "./Select.interface";
import { Options } from "./Options/Options";
import { createPortal } from "react-dom";
import { DROPDOWN_CONTAINER } from "@/app/layout.const";

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
  const selectRef = useRef<HTMLDivElement>(null);

  const onClickSelect = (): void => {
    if (!isSelectOpen) nextActionClose(setIsSelectOpen);
    setIsSelectOpen(!isSelectOpen);
  };
  const onClickItem = (item: FilterValue): void => {
    dispatch(setter(item));
  };

  return (
    <div className={styles.select}>
      <p className={styles.label}>{label}</p>
      <div
        className={classNames(styles.input, isSelectOpen && styles.open)}
        onClick={onClickSelect}
        ref={selectRef}
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
      {isSelectOpen &&
        selectRef.current &&
        createPortal(
          <Options
            list={list}
            click={onClickItem}
            parent={selectRef.current}
          />,
          document.getElementById(DROPDOWN_CONTAINER) || document.body
        )}
    </div>
  );
}
