"use client";
import { CartButtons } from "@/components/FilmCard/CartButtons/CartButtons";
import { LightBanner } from "@/components/LightBanner/LightBanner";
import { Spinner } from "@/components/Spinner/Spinner";
import { useGetMovieQuery } from "@/redux/app/app.api";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DISC_TITLE, NO_PAGE } from "./FilmPage.const";
import styles from "./FilmPage.module.scss";
import { fillList } from "./FilmPage.helper";

export default function FilmPage({
  params: { id },
}: {
  params: { id: string };
}): JSX.Element {
  const { data, isFetching, isError } = useGetMovieQuery(id);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  useEffect(() => setIsPageLoaded(true), []);

  return (
    <section className={styles.page}>
      {isError && <LightBanner text={NO_PAGE} />}
      {isFetching && !data && isPageLoaded && <Spinner isSmall fill />}
      {data && isPageLoaded && (
        <div className={styles.card}>
          <Image
            src={data.posterUrl}
            alt={data.title}
            width={400}
            height={500}
            priority
            className={styles.img}
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
      )}
    </section>
  );
}
