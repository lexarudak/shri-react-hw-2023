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
  setInit,
  store,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import { getTicketsAmount } from "@/model/helper";
import { useEffect } from "react";
import classNames from "classnames";

export const Header = (): JSX.Element => {
  const getCartItems = useAppSelector(cartSelector);
  const init = useAppSelector(initSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    store.subscribe(() => {
      localStorage.setItem(LS_KEY, JSON.stringify(store.getState().appSlice));
    });
  }, []);

  useEffect(() => {
    if (init) {
      const lsStore = localStorage.getItem(LS_KEY);
      if (lsStore) {
        const { filter, cart }: AppState = JSON.parse(lsStore);
        dispatch(setFilter(filter));
        dispatch(setCart(cart));
      }
      dispatch(setInit());
    }
  }, [init, dispatch]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href={RouteList.home} className={styles.title} prefetch={false}>
          {TITLE}
        </Link>
        <Link href={RouteList.cart} className={styles.tickets} prefetch={false}>
          <p className={classNames(styles.num, !init && styles.show)}>
            {getTicketsAmount(getCartItems)}
          </p>
        </Link>
        <Link href={RouteList.cart} className={styles.cart} prefetch={false} />
      </nav>
    </header>
  );
};
