// import PropTypes from 'prop-types';

import MovieItem from '../MovieItem/MovieItem';

const MovieList = ({ movies }) => {
  const elements = movies.map(movie => {
    return <MovieItem key={movie.id} movie={movie} />;
  });

  return <ul>{elements}</ul>;
};

export default MovieList;

// MovieList.propTypes = {};
