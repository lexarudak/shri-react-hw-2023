import { FilterValue } from "@/redux";
import styles from "./Options.module.scss";
import { GAP } from "../Select.const";

export const Options = ({
  list,
  click,
  parent,
}: {
  list: FilterValue[];
  click: (item: FilterValue) => void;
  parent: HTMLDivElement;
}): JSX.Element => {
  const { bottom, left } = parent.getBoundingClientRect();
  return (
    <ul className={styles.list} style={{ left, top: bottom + GAP }}>
      {list.map((item, ind) => (
        <li className={styles.item} key={ind} onClick={() => click(item)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};
