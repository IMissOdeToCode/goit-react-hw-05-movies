import PropTypes from 'prop-types';

import MovieItem from '../MovieItem/MovieItem';

import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const elements = movies.map(movie => {
    return <MovieItem key={movie.id} movie={movie} />;
  });

  return (
    <div className={css.movieListContainer}>
      <ul className={css.movieList}>{elements}</ul>
    </div>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.number,
    })
  ),
};
