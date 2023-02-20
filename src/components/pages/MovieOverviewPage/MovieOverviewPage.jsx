import { useState, useEffect, useCallback } from 'react';
import {
  useParams,
  useNavigate,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';

import GeneralMovieInfo from 'components/GeneralMovieInfo/GeneralMovieInfo';

import { getMovieById } from 'components/shared/services/themoviedb-api';

// import PropTypes from 'prop-types';

const MovieOverviewPage = () => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);

  const { id } = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const from = location?.state?.from || '/';

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const result = await getMovieById(id);
        setMovie(result.data);
      } catch ({ response }) {
        setError(response);
        return;
      }
    };
    fetchMovie();
  }, [id]);

  const goBack = useCallback(() => navigate(from), [navigate, from]);
  // const goBack = () => navigate(from);

  if (error) {
    console.log(error.data.status_message);
  }

  return (
    <>
      <button onClick={goBack}>Go back</button>
      <p>
        <Link to={`cast`} state={{ from: from }}>
          Cast
        </Link>
      </p>
      <p>
        <Link to={`reviews`} state={{ from: from }}>
          Reviews
        </Link>
      </p>

      <GeneralMovieInfo movie={movie} />
      <Outlet />
    </>
  );
};

export default MovieOverviewPage;

// MovieOverview.propTypes = {};
