"use client";
import Link from "next/link";
import { TITLE } from "./Header.const";
import styles from "./Header.module.scss";
import { RouteList } from "@/model/enum";
import { cartSelector, useAppSelector } from "@/redux";

export const Header = (): JSX.Element => {
  const getCartItems = useAppSelector(cartSelector);
  const getTicketsAmount = (): number =>
    getCartItems.reduce((acc, { amount }) => {
      return acc + amount;
    }, 0);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href={RouteList.home} className={styles.title}>
          {TITLE}
        </Link>
        <button className={styles.tickets}>{getTicketsAmount()}</button>
        <button className={styles.cart} />
      </nav>
    </header>
  );
};
