import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {movies} = props
  return <MovieItem key={movies.id} movie={movies} />
}

export default MoviesSlider
