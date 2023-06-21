export interface MultipleChildren {
  children: JSX.Element[];
}

export interface Cinema {
  id: string;
  name: string;
  movieIds: string[];
}

export type Cinemas = Cinema[];
