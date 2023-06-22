import { GenreList } from "@/app/components/Filter/Filter.const";
import { MovieShort } from "@/model/typesAndInterface";

export interface AppState {
  cart: MovieShort[];
  filter: Filter;
}

export interface Filter {
  name: string;
  genre: GenreList;
  cinema: string;
}
