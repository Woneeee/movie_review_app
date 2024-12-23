const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGVmNTZkYWIzNmRiZmQ4NWRiNzIzMTkzYzZjNzIzNyIsIm5iZiI6MTcyMjA2NzExMC44NjAxNTIsInN1YiI6IjY0ODY5ZjgxYzAzNDhiMDEzYzFkNTY3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vkf6CrVfVRl7WWd8BnVo51-GGsZX60T2U5LaK7_EvAY",
  },
};

const url = (urlName) => {
  return baseUrl + `${urlName}?language=ko-kr`;
};

export const trending = () =>
  fetch(url("trending/movie/day"), options).then((res) => res.json());

export const nowPlaying = () =>
  fetch(url("movie/now_playing"), options).then((res) => res.json());

export const popular = () =>
  fetch(url("movie/popular"), options).then((res) => res.json());

export const topRated = () =>
  fetch(url("movie/top_rated"), options).then((res) => res.json());

export const upcoming = () =>
  fetch(url("movie/upcoming"), options).then((res) => res.json());

export const trendingTv = () =>
  fetch(url("trending/tv/day"), options).then((res) => res.json());

export const onAir = () =>
  fetch(url("tv/on_the_air"), options).then((res) => res.json());

export const popTv = () =>
  fetch(url("tv/popular"), options).then((res) => res.json());

export const topTv = () =>
  fetch(url("tv/top_rated"), options).then((res) => res.json());

export const movieDetail = (movie_id) =>
  fetch(url(`movie/${movie_id}`), options).then((res) => res.json());

export const keywordMovie = (movie_id) =>
  fetch(url(`movie/${movie_id}/keywords`), options).then((res) => res.json());

export const recomMovie = (movie_id) =>
  fetch(url(`movie/${movie_id}/recommendations`), options).then((res) =>
    res.json()
  );

export const keywordRelate = (keyword_id) =>
  fetch(url(`keyword/${keyword_id}/movies`), options).then((res) => res.json());

export const keyDetail = (keyword_id) =>
  fetch(url(`keyword/${keyword_id}`), options).then((res) => res.json());

export const previewMovie = (movie_id) =>
  fetch(url(`movie/${movie_id}/videos`), options).then((res) => res.json());

export const searchMovie = (movieTitle) => {
  const searchUrl = baseUrl + `search/movie?query=${movieTitle}&language=ko-kr`;

  return fetch(searchUrl, options).then((res) => res.json());
};

export const searchPerson = (Person) => {
  const personSearchUrl =
    baseUrl + `search/person?query=${Person}&language=ko-kr`;

  return fetch(personSearchUrl, options).then((res) => res.json());
};

export const seriesDetail = (series_id) =>
  fetch(url(`tv/${series_id}`), options).then((res) => res.json());

export const recomTv = (series_id) =>
  fetch(url(`tv/${series_id}/recommendations`), options).then((res) =>
    res.json()
  );

export const previewTv = (series_id) => {
  const tvPreviewUrl = baseUrl + `tv/${series_id}/videos`;

  return fetch(tvPreviewUrl, options).then((res) => res.json());
};

export const searchTv = (series_id) => {
  const searchTvUrl = baseUrl + `search/tv?query=${series_id}&language=ko-kr`;

  return fetch(searchTvUrl, options).then((res) => res.json());
};
