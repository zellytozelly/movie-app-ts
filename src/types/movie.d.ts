interface Search {
  Title: string
  Year: string
  imdbID: string
  Type: String
  Poster: string
}

export interface IMovieAPIRes {
  Search: Search[]
  totalResults: string
  Response: string
}