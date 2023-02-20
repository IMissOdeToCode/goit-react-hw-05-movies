import { Link, useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';

const MovieItem = ({ movie }) => {
  const { title, id } = movie;
  const location = useLocation();

  return (
    <Link to={`/movies/${id}`} state={{ from: location }}>
      <li>{title}</li>
    </Link>
  );
};

export default MovieItem;

// MovieItem.propTypes = {};
