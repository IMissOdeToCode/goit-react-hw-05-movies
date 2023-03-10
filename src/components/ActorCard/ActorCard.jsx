import { IMAGE_w200 as image } from 'components/shared/utils/constants';
import defaultImgage from '../../default-avatar.jpeg';

import PropTypes from 'prop-types';

const ActorCard = ({ actor }) => {
  const { profile_path, name, character } = actor;
  const imageSrc = profile_path ? `${image}${profile_path}` : defaultImgage;

  return (
    <li>
      <img src={imageSrc} alt={`${name} poster`} width="200" />
      <p>{name}</p>
      <p>
        <b>Character:</b> {character}
      </p>
    </li>
  );
};

export default ActorCard;

ActorCard.propTypes = {
  actor: PropTypes.shape({
    profile_path: PropTypes.string,
    name: PropTypes.string,
    character: PropTypes.string,
  }),
};
