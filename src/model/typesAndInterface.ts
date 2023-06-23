export interface MultipleChildren {
  children: JSX.Element[];
}

export interface Cinema {
  id: string;
  name: string;
  movieIds: string[];
}

export type Cinemas = Cinema[];
export interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  releaseYear: number;
  description: string;
  genre: string;
  rating: number;
  director: string;
  reviewIds: string[];
}

export type Movies = Movie[];

export interface MovieShort {
  id: string;
  title: string;
  posterUrl: string;
  genre: string;
}

export type MoviesShort = MovieShort[];

export interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export type Reviews = Review[];
