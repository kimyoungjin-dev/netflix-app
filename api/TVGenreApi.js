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

export const apiTVGenre = {
  showAnimation: (with_genres) =>
    getAnything("/discover/tv", {
      with_genres,
      sort_by: "popularity.desc",
    }),

  showVariety: (with_genres) =>
    getAnything("/discover/tv", {
      with_genres,
      sort_by: "popularity.desc",
    }),

  showTalk: (with_genres) =>
    getAnything("/discover/tv", {
      with_genres,
      sort_by: "popularity.desc",
    }),

  showDrama: (with_genres) =>
    getAnything("/discover/tv", {
      with_genres,
      sorty_by: "popularity.desc",
    }),

  showSfFantasy: (with_genres) =>
    getAnything("/discover/tv", {
      with_genres,
      sorty_by: "popularity.desc",
    }),

  showActionAdventure: (with_genres) =>
    getAnything("/discover/tv", {
      with_genres,
      sorty_by: "popularity.desc",
    }),

  showDocumentary: (with_genres) =>
    getAnything("/discover/tv", {
      with_genres,
      sorty_by: "popularity.desc",
    }),

  showComedy: (with_genres) =>
    getAnything("/discover/tv", {
      with_genres,
      sorty_by: "popularity.desc",
    }),

  showMystery: (with_genres) =>
    getAnything("/discover/tv", {
      with_genres,
      sorty_by: "popularity.desc",
    }),
};
