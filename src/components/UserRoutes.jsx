import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

//////
// import HomePage from './pages/HomePage/HomePage';
// import MoviesPage from './pages/MoviePage/MoviesPage';

// import MovieOverviewPage from './pages/MovieOverviewPage/MovieOverviewPage';

import CastPage from './pages/CastPage/CastPage';
import ReviewsPage from './pages/ReviewsPage/ReviewsPage';
/////

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviePage/MoviesPage'));

const MovieOverviewPage = lazy(() =>
  import('./pages/MovieOverviewPage/MovieOverviewPage')
);
// const CastPage = lazy(() => import('./pages/CastPage/CastPage'));
// const ReviewsPage = lazy(() => import('./pages/ReviewsPage/ReviewsPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...Loading page...</p>}>
      <Routes>
        <Route index path="/" element={<HomePage />} />

        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieOverviewPage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
