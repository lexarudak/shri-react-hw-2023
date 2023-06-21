import styles from "./Card.module.scss";
import { CardProps } from "./Card.interface";
import classNames from "classnames";

export const Card = ({ children, className }: CardProps): JSX.Element => {
  const fillCard = (children: JSX.Element[]): JSX.Element[] =>
    children.map((child) => child);
  return (
    <div className={classNames(styles.card, className)}>
      {Array.isArray(children) ? fillCard(children) : children}
    </div>
  );
};
