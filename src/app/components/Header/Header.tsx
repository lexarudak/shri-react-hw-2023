import Link from "next/link";
import { TITLE } from "./Header.const";
import styles from "./Header.module.scss";
import { RouteList } from "@/model/enum";

export const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <Link href={RouteList.home} className={styles.title}>
        {TITLE}
      </Link>
      <button className={styles.tickets}>{7}</button>
      <button className={styles.cart} />
    </header>
  );
};
