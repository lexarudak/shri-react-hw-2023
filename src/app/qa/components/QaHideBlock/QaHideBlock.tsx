"use client";

import classNames from "classnames";
import styles from "./QaHideBlock.module.scss";
import { useState } from "react";
import { QaHideBlockProps } from "./QaHideBlock.interface";

export const QaHideBlock = ({ q, a }: QaHideBlockProps): JSX.Element => {
  const [isShow, setIsShow] = useState(false);
  const onClickHandler = (): void => setIsShow(!isShow);
  return (
    <div className={styles.card} onClick={onClickHandler}>
      <div className={styles.header}>
        <p className={styles.q}>{q}</p>
        <button
          className={classNames(styles.btn, isShow ? styles.show : null)}
          onClick={onClickHandler}
        />
      </div>
      <p className={classNames(styles.a, isShow ? styles.show : null)}>{a}</p>
    </div>
  );
};
