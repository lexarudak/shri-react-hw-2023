import { CartButtons } from "@/app/components/FilmCard/CartButtons/CartButtons";
import Image from "next/image";
import { DISC_TITLE, NO_PAGE } from "./FilmPage.const";
import styles from "./FilmPage.module.scss";
import { fillComments, fillList } from "./FilmPage.helper";
import { LightBanner } from "@/app/components/LightBanner/LightBanner";
import { ORIGIN, Path } from "@/redux/app/app.const";
import { Movie, Review } from "@/model/typesAndInterface";

export default async function FilmPage({
  params: { id },
}: {
  params: { id: string };
}): Promise<JSX.Element> {
  const getFilm = fetch(`${ORIGIN}${Path.movie}?movieId=${id}`);
  const getComments = fetch(`${ORIGIN}${Path.reviews}?movieId=${id}`);
  const [filmRes, commentsRes] = await Promise.all([getFilm, getComments]);

  try {
    const [filmData, commentsData]: [Movie, Review[]] = await Promise.all([
      filmRes.json(),
      commentsRes.json(),
    ]);

    return (
      <section className={styles.page}>
        <div className={styles.card}>
          <Image
            src={filmData.posterUrl}
            alt={filmData.title}
            width={400}
            height={500}
            priority
            className={styles.img}
          />
          <div className={styles.info}>
            <div className={styles.header}>
              <h2 className={styles.title}>{filmData.title}</h2>
              <CartButtons movie={filmData} />
            </div>
            {fillList(filmData)}
            <p className={styles.discTitle}>{DISC_TITLE}</p>
            <p className={styles.disc}>{filmData.description}</p>
          </div>
        </div>
        {commentsData.length && fillComments(commentsData)}
      </section>
    );
  } catch {
    return <LightBanner text={NO_PAGE} />;
  }
}
