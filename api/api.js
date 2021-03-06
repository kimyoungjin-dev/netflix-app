import axios from "axios";

const makeRequest = (path, params) => {
  return axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      ...params,
      api_key: "84746f07785a093ed42c3cee12d5a642",
      language: "ko-KR",
    },
  });
};

const getAnything = async (path, params = {}) => {
  try {
    const {
      data: { results },
      data,
    } = await makeRequest(path, params);
    return [results || data, null];
  } catch (e) {
    console.log(e);
    return [null || e];
  }
};

export const movieApi = {
  nowPlaying: () => getAnything("/movie/now_playing"),
  popular: () => getAnything("/movie/popular"),
  upcoming: () => getAnything("/movie/upcoming"),
  topRated: () => getAnything("/movie/top_rated"),
  discover: (with_genres) =>
    getAnything("/discover/movie", {
      with_genres,
    }),

  search: (query) => getAnything("/search/movie", { query }),
  movieCredit: (id) => getAnything(`/movie/${id}/credits`),
  movieGenre: () => getAnything("/genre/movie/list"),
  movieDetail: (id) =>
    getAnything(`/movie/${id}`, {
      append_to_response: "videos",
    }),
};

export const tvApi = {
  airingToday: () => getAnything("/tv/airing_today"),
  popular: () => getAnything("/tv/popular"),
  topRated: () => getAnything("/tv/top_rated"),
  thisweek: () => getAnything("/tv/on_the_air"),
  search: (query) => getAnything("/search/tv", { query }),
  showCredit: (id) => getAnything(`/tv/${id}/credits`),
  showGenre: () => getAnything("/genre/tv/list"),
  showDetail: (id) =>
    getAnything(`/tv/${id}`, {
      append_to_response: "videos",
    }),
};

export const apiImage = (
  path,
  defaultPath = "https://lh3.googleusercontent.com/proxy/Rr9Tr5xE6s5tzq-CfnBqDfBLWnYAnjfbWMZnMdgaOUeCVb8HBlIzuwd5OQf9VdKcsjsCzUV_MiC2aNRW1lUK23UW8zXcgQe1kxfUksgVu7EptapY2oGd3RI"
) => (path ? `https://image.tmdb.org/t/p/original${path}` : defaultPath);
