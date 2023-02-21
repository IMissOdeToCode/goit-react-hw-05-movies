import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import Searchbar from 'components/Searchbar/Searchbar';
import MovieList from 'components/MovieList/MovieList';

import { getMovieByName } from 'components/shared/services/themoviedb-api';

import css from './MoviePage.module.css';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const page = searchParams.get('page');

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const result = await getMovieByName(query, page);
        setMovies(result.data.results);
      } catch ({ response }) {
        setError(response);
        return;
      }
    };
    fetchMovie();
  }, [query, page]);

  const handleFormSubmit = ({ query }) => {
    setSearchParams({ query, page: 1 });
    setMovies([]);
  };

  const handleNextPage = () => {
    setSearchParams({ query, page: Number(page) + 1 });
  };

  if (error) {
    console.log(error.message);
  }

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      <MovieList movies={movies} />

      {movies.length > 0 && (
        <button onClick={handleNextPage} className={css.btn}>
          LOAD MORE
        </button>
      )}
    </>
  );
};

export default MoviesPage;
