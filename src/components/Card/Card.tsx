import { MultipleChildren } from "@/model/interface";
import styles from "./Card.module.scss";

export const Card = ({ children }: MultipleChildren): JSX.Element => {
  const fillCard = (): JSX.Element[] => children.map((child) => child);
  return <div className={styles.card}>{fillCard()}</div>;
};
