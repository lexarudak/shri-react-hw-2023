"use client";
import { MovieShort } from "@/model/typesAndInterface";
import styles from "./CartButtons.module.scss";
import {
  addToCart,
  cartSelector,
  reduceAmount,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import classnames from "classnames";
import { MAX_TICKETS_IN_CART } from "@/redux/app/app.const";

export const CartButtons = ({
  movie,
  openPopupFn,
}: {
  movie: MovieShort;
  openPopupFn?: (() => void) | null;
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(cartSelector);
  const amount = cart[movie.id] ? cart[movie.id].amount : 0;

  const addItem = (): void => {
    dispatch(addToCart(movie));
  };
  const reduceItemAmount = (): void => {
    openPopupFn && amount === 1 ? openPopupFn() : dispatch(reduceAmount(movie));
  };

  return (
    <div className={classnames(styles.buttons, amount > 9 && styles.large)}>
      <button
        className={classnames(styles.btn, styles.btnMinus)}
        onClick={reduceItemAmount}
        disabled={amount === 0}
      />
      <input className={styles.amount} type="text" disabled value={amount} />
      <button
        className={classnames(styles.btn, styles.btnPlus)}
        onClick={addItem}
        disabled={amount === MAX_TICKETS_IN_CART}
      />
    </div>
  );
};
