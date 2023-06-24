import { getGenreRu } from "@/model/helper";
import styles from "./FilmPage.module.scss";
import { Movie } from "@/model/typesAndInterface";
import { LIST_NAMES } from "./FilmPage.const";

export const fillList = ({
  genre,
  releaseYear,
  rating,
  director,
}: Movie): JSX.Element => (
  <ul className={styles.list}>
    {[getGenreRu(genre), releaseYear, rating, director].map((val, ind) => (
      <li className={styles.item} key={ind}>
        <span className={styles.itemTitle}>{LIST_NAMES[ind]}</span>
        <span className={styles.itemValue}>{val}</span>
      </li>
    ))}
  </ul>
);
