import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getReviewsById } from 'components/shared/services/themoviedb-api';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const result = await getReviewsById(id);
        setReviews(result.data.results);
      } catch ({ response }) {
        setError(response);
        return;
      }
    };
    fetchReviews();
  }, [id]);

  const elements = reviews.map(({ id, author, content }) => (
    <li key={id}>
      <p>
        Author: <strong>{author}</strong>{' '}
      </p>
      <p> {content}</p>
    </li>
  ));

  if (error) {
    console.log(error);
  }

  return (
    <>
      <h2>Reviews</h2>
      {reviews.length > 0 && <ul>{elements}</ul>}
      {reviews.length === 0 && (
        <strong>... there is no reviews here ...</strong>
      )}
    </>
  );
};

export default ReviewsPage;
