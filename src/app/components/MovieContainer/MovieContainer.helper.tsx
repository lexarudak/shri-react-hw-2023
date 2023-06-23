import { Movies } from "@/model/typesAndInterface";
import { GENRE_LIST } from "../Filter/Filter.const";
import { FilmCard } from "@/components/FilmCard/FilmCard";

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
    const genreRu = GENRE_LIST.find(({ value }) => value === genre);
    return (
      <FilmCard
        key={id}
        movieShort={{
          title,
          id,
          posterUrl,
          genre: genreRu ? genreRu.name : genre,
        }}
      />
    );
  });
};
