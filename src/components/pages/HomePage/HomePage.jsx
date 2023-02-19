import { useState, useEffect } from 'react';

// import * as movieAPI from 'components/shared/services/themoviedb-api';
import { getTrendingMovies } from 'components/shared/services/themoviedb-api';

import MovieList from '../../MovieList/MovieList';

// import trendingMovies from 'components/shared/utils/trendingMovies';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTrendingMovies()
      .then(response => {
        // console.log('response in home page', response);
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

  // console.log(films);
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
