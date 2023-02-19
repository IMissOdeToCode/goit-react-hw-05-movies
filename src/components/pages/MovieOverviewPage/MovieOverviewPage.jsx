import { useState, useEffect, useCallback } from 'react';
import {
  useParams,
  useNavigate,
  Link,
  Outlet,
  // useLocation,
} from 'react-router-dom';

import GeneralMovieInfo from 'components/GeneralMovieInfo/GeneralMovieInfo';

import { getMovieById } from 'components/shared/services/themoviedb-api';

// import PropTypes from 'prop-types';

const MovieOverviewPage = () => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);

  const { id } = useParams();

  const navigate = useNavigate();
  // const location = useLocation();

  // navigate({ state: 'home' });

  // console.log('location', location);

  // const initPath = useRef(location?.state?.state?.from?.pathname || null);
  // console.log('initPath', initPath);

  // console.log('window', window.location);
  // console.log('origin', window.origin);
  // console.log('initPath', initPath);

  // window.location
  // // window.origin

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

  const goBack = useCallback(() => navigate(-1), [navigate]);
  // const goBack = useCallback(() => navigate('/'), [navigate]);

  if (error) {
    console.log(error.data.status_message);
  }

  return (
    <>
      <button onClick={goBack}>Go back</button>
      <p>
        <Link to={`cast`}>Cast</Link>
      </p>
      <p>
        <Link to={`reviews`}>Reviews</Link>
      </p>

      <GeneralMovieInfo movie={movie} />
      <Outlet />
    </>
  );
};

export default MovieOverviewPage;

// MovieOverview.propTypes = {};
