import { FilterValue } from "@/redux";

export const TITLE = "Фильтр поиска";
export const NAME = "Название";
export const NAME_PLACEHOLDER = "Введите название";
export const GENRE = "Жанр";
export const GENRE_PLACEHOLDER = "Выберете жанр";
export const CINEMA = "Кинотеатр";
export const CINEMA_PLACEHOLDER = "Выберете кинотеатр";

export const GENRE_LIST: FilterValue[] = [
  { name: "Не выбран", value: "" },
  { name: "Ужасы", value: "horror" },
  { name: "Комедия", value: "comedy" },
  { name: "Фэнтези", value: "fantasy" },
  { name: "Боевиĸ", value: "action" },
];

export enum ListType {
  genre,
  cinema,
}

export const ALL_CINEMAS: FilterValue = { name: "Не выбран", value: "" };
