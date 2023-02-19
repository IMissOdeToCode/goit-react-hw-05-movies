import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import Searchbar from 'components/Searchbar/Searchbar';
import MovieList from 'components/MovieList/MovieList';

import { getMovieByName } from 'components/shared/services/themoviedb-api';

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

      {movies.length > 0 && <button onClick={handleNextPage}>LOAD MORE</button>}
    </>
  );
};

export default MoviesPage;

// useEffect(() => {
//   if (!query) {
//     return;
//   }

//   getMovieByName(query, page)
//     .then(response => {
//       if (response.status !== 200) {
//         console.log('STATUS NOT 200');
//         return setError(new Error(`some err message`));
//       }
//       setMovies(response.data.results);
//     })
//     .catch(err => {
//       setError(err);
//     })
//     .finally();
// }, [query, page]);
