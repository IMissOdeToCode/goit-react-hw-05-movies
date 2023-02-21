import { useState, useEffect } from 'react';

import { getTrendingMovies } from 'components/shared/services/themoviedb-api';

import MovieList from '../../MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTrendingMovies()
      .then(response => {
        if (response.status !== 200) {
          console.log('STATUS NOT 200');
          return setError(new Error(`some err message`));
        }
        setMovies(response.data.results);
      })
      .catch(err => {
        setError(err);
      })
      .finally();
  }, []);

  if (error) {
    console.log(error.message);
  }

  return (
    <>
      <h1>Trending today:</h1>
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
