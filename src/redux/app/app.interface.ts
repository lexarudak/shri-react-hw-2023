import { MovieShort } from "@/model/typesAndInterface";

export type Cart = {
  [id: string]: {
    movie: MovieShort;
    amount: number;
  };
};

export interface AppState {
  cart: Cart;
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
