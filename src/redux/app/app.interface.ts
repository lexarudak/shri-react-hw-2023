import { MovieShort } from "@/model/typesAndInterface";

export interface AppState {
  cart: MovieShort[];
  filter: Filter;
}

export interface Filter {
  name: string;
  genre: FilterValue;
  cinema: FilterValue;
}

export interface FilterValue {
  name: string;
  value: string;
}
