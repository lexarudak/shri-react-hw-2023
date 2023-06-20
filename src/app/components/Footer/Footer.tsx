import Link from "next/link";
import styles from "./Footer.module.scss";
import { ABOUT, QA } from "./Footer.const";
import { RouteList } from "@/model/enum";

export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <Link className={styles.btn} href={RouteList.qa}>
          {QA}
        </Link>
        <Link className={styles.btn} href={RouteList.about}>
          {ABOUT}
        </Link>
      </nav>
    </footer>
  );
};
