import { useState, useEffect, useCallback } from 'react';
import {
  useParams,
  useNavigate,
  Outlet,
  useLocation,
  NavLink,
} from 'react-router-dom';

import GeneralMovieInfo from 'components/GeneralMovieInfo/GeneralMovieInfo';

import { getMovieById } from 'components/shared/services/themoviedb-api';

import css from './MovieOverviewPage.module.css';

const MovieOverviewPage = () => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);

  const { id } = useParams();

  const navigate = useNavigate();
  const location = useLocation();

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

  if (error) {
    console.log(error.data.status_message);
  }

  return (
    <>
      <button onClick={goBack} className={css.btn}>
        Go back
      </button>

      <p>
        <NavLink to={`cast`} state={{ from: from }} className={css.linkText}>
          Cast
        </NavLink>
      </p>
      <p>
        <NavLink to={`reviews`} state={{ from: from }} className={css.linkText}>
          Reviews
        </NavLink>
      </p>

      <GeneralMovieInfo movie={movie} />
      <Outlet />
    </>
  );
};

export default MovieOverviewPage;
