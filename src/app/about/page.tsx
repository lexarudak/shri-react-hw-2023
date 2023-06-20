import { Card } from "@/components/Card/Card";
import styles from "./AboutPage.module.scss";
import { PAGE_TEXT, TITLE } from "./AboutPage.const";

export default function AboutPage(): JSX.Element {
  const fillPage = (pageText: string[]): JSX.Element[] =>
    pageText.map((text, ind) => <p key={ind}>{text}</p>);

  return (
    <section className={styles.page}>
      <Card>
        <h2 className={styles.title}>{TITLE}</h2>
        <>{fillPage(PAGE_TEXT)}</>
      </Card>
    </section>
  );
}
