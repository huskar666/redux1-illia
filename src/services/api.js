const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "efe85f116f7186fc0c7e2d9bb34eac76";

export const getTrending = async () => {
  const res = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
  return res.json();
};

export const searchMovies = async (query) => {
  const res = await fetch(`${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`);
  return res.json();
};

export const getMovieDetails = async (id) => {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  return res.json();
};

export const getMovieCredits = async (id) => {
  const res = await fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
  return res.json();
};

export const getMovieReviews = async (id) => {
  const res = await fetch(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`);
  return res.json();
};