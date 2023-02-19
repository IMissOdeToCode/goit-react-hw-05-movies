import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CastList from 'components/CastList/CastList';

import { getCreditsById } from 'components/shared/services/themoviedb-api';

// import PropTypes from 'prop-types';

const CastPage = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const result = await getCreditsById(id);
        setCast(result.data.cast);
      } catch ({ response }) {
        setError(response);
        return;
      }
    };
    fetchCredits();
  }, [id]);

  // console.log(cast);

  if (error) {
    console.log(error.message);
  }

  return (
    <>
      <CastList cast={cast} />
    </>
  );
};

export default CastPage;
// CastPage.propTypes = {};
