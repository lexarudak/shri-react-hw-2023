"use client";
import styles from "./FilmCard.module.scss";
import { FilmCardProps } from "./FilmCard.interface";
import Image from "next/image";
import { CartButtons } from "./CartButtons/CartButtons";
import { Popup } from "../Popup/Popup";
import { useState } from "react";
import { createPortal } from "react-dom";
import { POPUP_CONTAINER } from "@/app/layout.const";

export const FilmCard = ({
  movieShort: { posterUrl, title, genre, id },
  cartMode,
}: FilmCardProps): JSX.Element => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const closePopup = setIsPopupOpen.bind(null, false);
  const openPopup = setIsPopupOpen.bind(null, true);

  return (
    <div className={styles.card}>
      {isPopupOpen &&
        createPortal(
          <Popup id={id} closeFn={closePopup} />,
          document.getElementById(POPUP_CONTAINER) || document.body
        )}
      <Image
        src={posterUrl}
        alt={title}
        width={100}
        height={120}
        priority
        className={styles.img}
      />
      <div className={styles.text}>
        <p className={styles.title}>{title}</p>
        <p className={styles.genre}>{genre}</p>
      </div>
      <CartButtons
        movie={{ posterUrl, id, title, genre }}
        openPopupFn={cartMode ? openPopup : null}
      />
      {cartMode && <button className={styles.btnClose} onClick={openPopup} />}
    </div>
  );
};
