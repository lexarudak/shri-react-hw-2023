import { Movies } from "@/model/typesAndInterface";
import { FilmCard } from "@/app/components/FilmCard/FilmCard";

export const fillContainer = (
  data: Movies,
  filterGenre: string,
  name: string
): JSX.Element[] => {
  const filteredByGenre = filterGenre
    ? data.filter(({ genre }) => genre === filterGenre)
    : data;
  const filteredByName = name
    ? filteredByGenre.filter(({ title }) =>
        title.toLowerCase().includes(name.toLowerCase().trim())
      )
    : filteredByGenre;
  return filteredByName.map(({ title, id, posterUrl, genre }) => {
    return (
      <FilmCard
        key={id}
        movieShort={{
          title,
          id,
          posterUrl,
          genre: genre,
        }}
      />
    );
  });
};
