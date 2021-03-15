import React, { useState, useEffect, useLayoutEffect } from "react";
import { movieApi, tvApi } from "../../api/api";
import OpenPresenter from "./OpenPresenter";

const OpenContainer = () => {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState({
    movies: [],
    movieCategory: [],
    showCategory: [],
    moviesError: null,
    movieCategoryError: null,
    showCategoryError: null,
  });

  const getData = async () => {
    const [movies, moviesError] = await movieApi.upcoming();
    const [movieCategory, movieCategoryError] = await movieApi.movieGenre();
    const [showCategory, showCategoryError] = await tvApi.showGenre();
    setResults({
      movies,
      movieCategory,
      showCategory,
      moviesError,
      movieCategoryError,
      showCategoryError,
    });
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return <OpenPresenter loading={loading} {...results} refreshing={getData} />;
};

export default OpenContainer;
