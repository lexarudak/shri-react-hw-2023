"use client";
import { POPUP_CONTAINER } from "@/app/layout.const";
import { RouteList } from "@/model/enum";
import { getGenreRu } from "@/model/helper";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Popup } from "../Popup/Popup";
import { CartButtons } from "./CartButtons/CartButtons";
import { FilmCardProps } from "./FilmCard.interface";
import styles from "./FilmCard.module.scss";

export const FilmCard = ({
  movieShort: { posterUrl, title, genre, id },
  cartMode,
}: FilmCardProps): JSX.Element => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const router = useRouter();
  const closePopup = setIsPopupOpen.bind(null, false);
  const openPopup = setIsPopupOpen.bind(null, true);
  const onClickNavigate = (): void => {
    router.push(`${RouteList.film}/${id}`);
  };

  isPopupOpen
    ? document.body.classList.add("block")
    : document.body.classList.remove("block");

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
        onClick={onClickNavigate}
        placeholder="blur"
        blurDataURL={posterUrl}
      />
      <div className={styles.text}>
        <p className={styles.title} onClick={onClickNavigate}>
          {title}
        </p>
        <p className={styles.genre}>{getGenreRu(genre)}</p>
      </div>
      <CartButtons
        movie={{ posterUrl, id, title, genre }}
        openPopupFn={cartMode ? openPopup : null}
      />
      {cartMode && <button className={styles.btnClose} onClick={openPopup} />}
    </div>
  );
};
