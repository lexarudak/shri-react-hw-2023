import { Card } from "@/components/Card/Card";
import styles from "./QaPage.module.scss";
import { QA_LIST, TITLE } from "./QaPage.const";
import { QaHideBlock } from "./components/QaHideBlock/QaHideBlock";

export default function QaPage(): JSX.Element {
  const fillQa = (qaList: [string, string][]): JSX.Element[] =>
    qaList.map(([q, a], ind) => (
      <Card key={ind} className={styles.card}>
        <QaHideBlock q={q} a={a} />
      </Card>
    ));
  return (
    <section className={styles.page}>
      <Card>{<h2 className={styles.title}>{TITLE}</h2>}</Card>
      {fillQa(QA_LIST)}
    </section>
  );
}
