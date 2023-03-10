import { IMAGE_w500 as image } from 'components/shared/utils/constants';
import defaultImgage from '../../default.jpg';

import PropTypes from 'prop-types';

import css from './GeneralMovieInfo.module.css';

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
      <p className={css.text}>{title}</p>
      <img src={imageSrc} alt={`${title} poster`} width="300" />

      <p className={css.userScore}>User Score: {vote_average}</p>
      <h2>overview</h2>
      <p>{overview}</p>
      <p>
        Genres <b>{getGenresString()}</b>
      </p>
    </>
  );
};

export default GeneralMovieInfo;

GeneralMovieInfo.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    // runtime,
    // release_date,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }),
};
