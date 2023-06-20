import { MultipleChildren } from "@/model/interface";
import styles from "./Card.module.scss";

export const Card = ({
  children,
}: MultipleChildren | { children: JSX.Element }): JSX.Element => {
  const fillCard = (children: JSX.Element[]): JSX.Element[] =>
    children.map((child) => child);
  return (
    <div className={styles.card}>
      {Array.isArray(children) ? fillCard(children) : children}
    </div>
  );
};
