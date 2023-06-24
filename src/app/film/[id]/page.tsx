"use client";
import { CartButtons } from "@/app/components/FilmCard/CartButtons/CartButtons";
import { useGetMovieQuery, useGetReviewsQuery } from "@/redux/app/app.api";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DISC_TITLE, NO_PAGE } from "./FilmPage.const";
import styles from "./FilmPage.module.scss";
import { fillComments, fillList } from "./FilmPage.helper";
import { LightBanner } from "@/app/components/LightBanner/LightBanner";
import { Spinner } from "@/app/components/Spinner/Spinner";

export default function FilmPage({
  params: { id },
}: {
  params: { id: string };
}): JSX.Element {
  const { data, isFetching } = useGetMovieQuery(id);
  const {
    data: reviews,
    isFetching: isFetchingReviews,
    isError: isErrorReviews,
  } = useGetReviewsQuery(id);

  const [isPageLoaded, setIsPageLoaded] = useState(false);
  useEffect(() => setIsPageLoaded(true), []);

  return (
    <section className={styles.page}>
      {!data && !isFetching && <LightBanner text={NO_PAGE} />}
      {isFetching && !data && isPageLoaded && <Spinner isSmall fill />}
      {data && isPageLoaded && (
        <>
          <div className={styles.card}>
            <Image
              src={data.posterUrl}
              alt={data.title}
              width={400}
              height={500}
              priority
              className={styles.img}
              placeholder="blur"
              blurDataURL={data.posterUrl}
            />
            <div className={styles.info}>
              <div className={styles.header}>
                <h2 className={styles.title}>{data.title}</h2>
                <CartButtons movie={data} />
              </div>
              {fillList(data)}
              <p className={styles.discTitle}>{DISC_TITLE}</p>
              <p className={styles.disc}>{data.description}</p>
            </div>
          </div>
          {isErrorReviews && <LightBanner text={NO_PAGE} />}
          {isFetchingReviews && !reviews && isPageLoaded && (
            <Spinner isSmall fill />
          )}
          {reviews && isPageLoaded && fillComments(reviews)}
        </>
      )}
    </section>
  );
}
