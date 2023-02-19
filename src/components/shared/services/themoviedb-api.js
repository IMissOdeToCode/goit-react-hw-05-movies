import axios from 'axios';
import { baseURL, api_key } from '../utils/constants';

const instance = axios.create({
  baseURL,
  params: {
    api_key,
  },
});

export const getTrendingMovies = async (page = 1) => {
  const response = await instance.get(`/trending/movie/day`, {
    params: { page: page },
  });
  return response;
};

export const getMovieByName = async (query, page = 1) => {
  const response = await instance.get(`/search/movie`, {
    params: { query, page },
  });
  return response;
};

export const getMovieById = async id => {
  const response = await instance.get(`/movie/${id}`, {});
  return response;
};

export const getCreditsById = async id => {
  const response = await instance.get(`/movie/${id}/credits`, {});
  return response;
};

export const getReviewsById = async id => {
  const response = await instance.get(`/movie/${id}/reviews`, {});
  return response;
};

//https://api.themoviedb.org/3
//api_key = '0bc878463aed8cb35ccb568f26e879ad';

//https://api.themoviedb.org/3/movie/505642?api_key=0bc878463aed8cb35ccb568f26e879ad BY ID
//https://api.themoviedb.org/3/search/movie?query=batman&api_key=0bc878463aed8cb35ccb568f26e879ad BY NAME "batman"

//https://api.themoviedb.org/3/movie/505642/credits?api_key=0bc878463aed8cb35ccb568f26e879ad CREDITS (for cast page)
//https://api.themoviedb.org/3/movie/505642/reviews?api_key=0bc878463aed8cb35ccb568f26e879ad REVIEWS

// IMAGES

//https://image.tmdb.org/t/p/w500/4jdsjY5jKwoNpCMd5nnJFsDmieY.jpg actor

//https://image.tmdb.org/t/p/w500/blEC280vq31MVaDcsWBXuGOsYnB.jpg reviewer
