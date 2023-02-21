import { Link, useLocation } from 'react-router-dom';

import css from './MovieItem.module.css';

import PropTypes from 'prop-types';

const MovieItem = ({ movie }) => {
  const { title, id } = movie;
  const location = useLocation();

  return (
    <Link to={`/movies/${id}`} state={{ from: location }}>
      <li className={css.movieItem}>{title}</li>
    </Link>
  );
};

export default MovieItem;

MovieItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
  }),
};
