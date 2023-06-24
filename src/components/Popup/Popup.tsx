"use client";
import { removeItem, useAppDispatch } from "@/redux";
import styles from "./Popup.module.scss";
import { NO, TEXT, TITLE, YES } from "./Popup.const";

export const Popup = ({
  id,
  closeFn,
}: {
  id: string;
  closeFn: () => void;
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const onYesClick = (): void => {
    dispatch(removeItem(id));
  };

  const overlayOnClick = (
    currentTarget: EventTarget,
    target: EventTarget
  ): void => {
    currentTarget === target && closeFn();
  };

  return (
    <div
      className={styles.overlay}
      onClick={({ currentTarget, target }) =>
        overlayOnClick(currentTarget, target)
      }
    >
      <div className={styles.card}>
        <div className={styles.header}>
          <p className={styles.title}>{TITLE}</p>
          <button className={styles.closeBtn} onClick={closeFn} />
        </div>
        <p className={styles.text}>{TEXT}</p>
        <div className={styles.buttonsContainer}>
          <button className={styles.btnYes} onClick={onYesClick}>
            {YES}
          </button>
          <button className={styles.btnNo} onClick={closeFn}>
            {NO}
          </button>
        </div>
      </div>
    </div>
  );
};
