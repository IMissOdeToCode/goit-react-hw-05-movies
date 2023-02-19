// import PropTypes from 'prop-types';

import ActorCard from 'components/ActorCard/ActorCard';

const CastList = ({ cast }) => {
  const elements = cast.map(actor => (
    <ActorCard key={actor.id} actor={actor} />
  ));

  return <ul>{elements}</ul>;
};

export default CastList;
