import Link from "next/link";
import styles from "./Footer.module.scss";
import { ABOUT, QA } from "./Footer.const";
import { RouteList } from "@/model/enum";

export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <Link href={RouteList.qa}>{QA}</Link>
        <Link href={RouteList.about}>{ABOUT}</Link>
      </nav>
    </footer>
  );
};
