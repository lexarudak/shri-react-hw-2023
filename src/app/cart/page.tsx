"use client";
import { cartSelector, useAppSelector } from "@/redux";
import { ALL_TEXT, NO_TICKETS_TEXT } from "./CartPage.const";
import styles from "./CartPage.module.scss";
import { getTicketsAmount } from "@/model/helper";
import { FilmCard } from "@/components/FilmCard/FilmCard";
import { LightBanner } from "@/components/LightBanner/LightBanner";

export default function CartPage(): JSX.Element {
  const getCartItems = useAppSelector(cartSelector);
  const itemsAmount = getTicketsAmount(getCartItems);
  const items = Object.values(getCartItems);
  const fillPage = (): JSX.Element[] =>
    items.map(({ movie }) => (
      <FilmCard key={movie.id} movieShort={movie} cartMode />
    ));

  return itemsAmount ? (
    <section className={styles.page}>
      {fillPage()}
      <div className={styles.all}>
        <p className={styles.allText}>{ALL_TEXT}</p>
        <input
          className={styles.allAmount}
          type="text"
          disabled
          value={itemsAmount}
        />
      </div>
    </section>
  ) : (
    <LightBanner text={NO_TICKETS_TEXT} />
  );
}
