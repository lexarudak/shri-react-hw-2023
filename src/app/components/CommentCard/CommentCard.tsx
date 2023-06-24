import styles from "./CommentCard.module.scss";
import { Review } from "@/model/typesAndInterface";
import { RATING } from "./CommentCard.const";
import Image from "next/image";

export const CommentCard = ({
  review: { name, rating, text },
}: {
  review: Review;
}): JSX.Element => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <Image src="/icons/photo.svg" width={32} height={32} alt={name} />
      </div>
      <div className={styles.info}>
        <div className={styles.header}>
          <p className={styles.title}>{name}</p>
          <p>{RATING}</p>
          <p className={styles.rating}>{rating}</p>
        </div>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};
