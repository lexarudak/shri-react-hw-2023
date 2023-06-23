import styles from "./QaPage.module.scss";
import { QA_LIST, TITLE } from "./QaPage.const";
import { QaHideBlock } from "./components/QaHideBlock/QaHideBlock";

export default function QaPage(): JSX.Element {
  const fillQa = (qaList: [string, string][]): JSX.Element[] =>
    qaList.map(([q, a], ind) => <QaHideBlock key={ind} q={q} a={a} />);
  return (
    <section className={styles.page}>
      <h2 className={styles.title}>{TITLE}</h2>
      {fillQa(QA_LIST)}
    </section>
  );
}
