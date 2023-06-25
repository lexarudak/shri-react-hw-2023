"use client";
import { getTicketsAmount } from "@/model/helper";
import styles from "./ItemsAmount.module.scss";
import Link from "next/link";
import { RouteList } from "@/model/enum";
import classNames from "classnames";
import { cartSelector, initSelector, useAppSelector } from "@/redux";

export const ItemsAmount = (): JSX.Element => {
  const getCartItems = useAppSelector(cartSelector);
  const init = useAppSelector(initSelector);

  return (
    <Link href={RouteList.cart} className={styles.tickets} prefetch={false}>
      <p className={classNames(styles.num, !init && styles.show)}>
        {getTicketsAmount(getCartItems)}
      </p>
    </Link>
  );
};
