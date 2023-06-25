"use client";
import { RouteList } from "@/model/enum";
import {
  AppState,
  initSelector,
  setInit,
  setState,
  store,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import Link from "next/link";
import { LS_KEY, TITLE } from "./Header.const";
import styles from "./Header.module.scss";

import { useEffect } from "react";
import { ItemsAmount } from "../ItemsAmount";

export const Header = (): JSX.Element => {
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
        const { cart, filter }: AppState = JSON.parse(lsStore);
        dispatch(setState({ cart, filter, init: false }));
      } else {
        dispatch(setInit());
      }
    }
  }, [init, dispatch]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href={RouteList.home} className={styles.title} prefetch={false}>
          {TITLE}
        </Link>
        <ItemsAmount />
        <Link href={RouteList.cart} className={styles.cart} prefetch={false} />
      </nav>
    </header>
  );
};
