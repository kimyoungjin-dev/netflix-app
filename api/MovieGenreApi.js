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

export const apiMovieGenre = {
  movieAction: (with_genres) =>
    getAnything("/discover/movie", {
      with_genres,
    }),

  movieAdventure: (with_genres) =>
    getAnything("/discover/movie", {
      with_genres,
    }),

  movieHorror: (with_genres) =>
    getAnything("/discover/movie", {
      with_genres,
    }),

  movieMystery: (with_genres) =>
    getAnything("/discover/movie", {
      with_genres,
      sorty_by: "popularity.desc",
    }),

  movieSf: (with_genres) =>
    getAnything("/discover/movie", {
      with_genres,
      sorty_by: "popularity.desc",
    }),

  movieThriller: (with_genres) =>
    getAnything("/discover/movie", {
      with_genres,
      sorty_by: "popularity.desc",
    }),

  movieCrime: (with_genres) =>
    getAnything("/discover/movie", {
      with_genres,
      sorty_by: "popularity.desc",
    }),

  movieFantasy: (with_genres) =>
    getAnything("/discover/movie", {
      with_genres,
      sorty_by: "popularity.desc",
    }),

  movieRomance: (with_genres) =>
    getAnything("/discover/movie", {
      with_genres,
      sorty_by: "popularity.desc",
    }),
};
