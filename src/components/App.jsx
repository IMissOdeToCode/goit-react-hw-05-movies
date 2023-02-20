// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import UserRoutes from './UserRoutes';

import Navbar from './modules/Navbar/Navbar';

export const App = () => {
  return (
    <>
      <Navbar />
      <UserRoutes />
      <ToastContainer />
    </>
  );
};
