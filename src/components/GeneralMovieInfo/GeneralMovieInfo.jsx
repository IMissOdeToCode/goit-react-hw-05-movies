import { IMAGE_w500 as image } from 'components/shared/utils/constants';
import defaultImgage from '../../default.jpg';

// import PropTypes from 'prop-types';

const GeneralMovieInfo = ({ movie }) => {
  const isObjectEmpty = Boolean(Object.keys(movie).length);

  if (false === isObjectEmpty) {
    return;
  }

  const {
    title,
    poster_path,
    vote_average,
    // runtime,
    // release_date,
    overview,
    genres,
  } = movie;

  const getGenresString = () => {
    const genresList = genres.reduce((list, genreObj) => {
      list.push(genreObj.name);
      return list;
    }, []);
    const genresString = genresList.join(', ');
    return genresString;
  };

  const imageSrc = poster_path ? `${image}${poster_path}` : defaultImgage;

  return (
    <>
      <h2>general movie info</h2>
      <img src={imageSrc} alt={`${title} poster`} className="" width="300" />
      <p>{title}</p>
      <p>User Score: {vote_average}</p>
      <h2>overview</h2>
      <p>{overview}</p>
      <p>Genres</p>
      <p>{getGenresString()}</p>
    </>
  );
};

export default GeneralMovieInfo;
