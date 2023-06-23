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

export const CartButtons = ({ movie }: { movie: MovieShort }): JSX.Element => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(cartSelector);
  const amount = cart[movie.id] ? cart[movie.id].amount : 0;

  const addItem = (): void => {
    dispatch(addToCart(movie));
  };
  const reduceItemAmount = (): void => {
    dispatch(reduceAmount(movie));
  };

  return (
    <div className={styles.buttons}>
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
