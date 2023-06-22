export const TITLE = "Фильтр поиска";
export const NAME = "Название";
export const NAME_PLACEHOLDER = "Введите название";
export const GENRE = "Жанр";
export const GENRE_PLACEHOLDER = "Выберете жанр";
export const CINEMA = "Кинотеатр";
export const CINEMA_PLACEHOLDER = "Выберете кинотеатр";

export enum GenreList {
  all = "Все жанры",
  horror = "Ужасы",
  comedy = "Комедия",
  fantasy = "Фэнтези",
  action = "Боевиĸ",
}

export const GENRE_LIST = Object.values(GenreList);

export enum ListType {
  genre,
  cinema,
}

export const ALL_CINEMAS = "Все кинотеатры";
