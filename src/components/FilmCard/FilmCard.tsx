"use client";
import styles from "./FilmCard.module.scss";
import { FilmCardProps } from "./FilmCard.interface";
import Image from "next/image";
import { CartButtons } from "./CartButtons/CratButtons";

export const FilmCard = ({
  movieShort: { posterUrl, title, genre, id },
  cartMode,
}: FilmCardProps): JSX.Element => {
  return (
    <div className={styles.card}>
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
      <CartButtons movie={{ posterUrl, id, title, genre }} />
      {cartMode && <button className={styles.btnClose} />}
    </div>
  );
};
