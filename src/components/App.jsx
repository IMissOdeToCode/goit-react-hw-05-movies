import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './modules/Navbar/Navbar';

import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviePage/MoviesPage';
import MovieOverviewPage from './pages/MovieOverviewPage/MovieOverviewPage';
import CastPage from './pages/CastPage/CastPage';
import ReviewsPage from './pages/ReviewsPage/ReviewsPage';

// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieOverviewPage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace={true} />} />

        {/* <Route path="/debug" element={<DebugPage />} /> */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};
