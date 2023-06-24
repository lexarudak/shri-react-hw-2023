import { getGenreRu } from "@/model/helper";
import styles from "./FilmPage.module.scss";
import { Movie, Review } from "@/model/typesAndInterface";
import { LIST_NAMES } from "./FilmPage.const";
import { CommentCard } from "@/app/components/CommentCard/CommentCard";

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

export const fillComments = (reviews: Review[]): JSX.Element => (
  <ul className={styles.commentsList}>
    {reviews.map((review) => (
      <CommentCard review={review} key={review.id} />
    ))}
  </ul>
);
