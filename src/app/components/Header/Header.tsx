"use client";
import Link from "next/link";
import { LS_KEY, TITLE } from "./Header.const";
import styles from "./Header.module.scss";
import { RouteList } from "@/model/enum";
import {
  AppState,
  cartSelector,
  initSelector,
  setCart,
  setFilter,
  setFilterGenre,
  setInit,
  store,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import { getTicketsAmount } from "@/model/helper";
import { useEffect } from "react";

export const Header = (): JSX.Element => {
  const getCartItems = useAppSelector(cartSelector);
  const init = useAppSelector(initSelector);
  const dispatch = useAppDispatch();
  useEffect(() => {
    store.subscribe(() => {
      localStorage.setItem(LS_KEY, JSON.stringify(store.getState().appSlice));
    });
    if (init) {
      dispatch(setInit);
      const lsStore = localStorage.getItem(LS_KEY);
      if (lsStore) {
        const { filter, cart }: AppState = JSON.parse(lsStore);
        dispatch(setFilter(filter));
        dispatch(setCart(cart));
      }
    }
  }, [init, dispatch]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href={RouteList.home} className={styles.title}>
          {TITLE}
        </Link>
        <Link href={RouteList.cart} className={styles.tickets}>
          {getTicketsAmount(getCartItems)}
        </Link>
        <Link href={RouteList.cart} className={styles.cart} />
      </nav>
    </header>
  );
};
