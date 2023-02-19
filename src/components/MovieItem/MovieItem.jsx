import { Link, useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';

const MovieItem = ({ movie }) => {
  const { title, id } = movie;
  const location = useLocation();
  console.log(location);

  return (
    <Link to={`/movies/${id}`} state={{}}>
      <li>{title}</li>
    </Link>
  );
};

export default MovieItem;

// MovieItem.propTypes = {};
