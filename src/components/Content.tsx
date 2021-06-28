import { MovieCard } from "./MovieCard";

type Rating = {
  Source: string;
  Value: string;
}

export type Movie = {
  imdbID: string
  Title: string
  Poster: string
  Ratings: Rating[]
  Runtime: string;
}

type ContentProps = {
  genre: string
  movies: Movie[]
}

export const Content = ({ genre, movies }: ContentProps)  => (
  <div className="container">
      <header>
        <span className="category">Categoria:<span> {genre}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
)