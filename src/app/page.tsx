"use client";
import styles from "./HomePage.module.scss";
import { Filter } from "./components/Filter/Filter";
import { MovieContainer } from "./components/MovieContainer/MovieContainer";

export default function HomePage(): JSX.Element {
  return (
    <section className={styles.mainPage}>
      <Filter />
      <MovieContainer />
    </section>
  );
}
