import React, { useState, useEffect } from "react";
import { movieApi, tvApi } from "../../api/api";
import MoviePresenter from "./MoviePresenter";

const MovieContainer = () => {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState({
    //public
    nowPlaying: [],
    popular: [],
    upcoming: [],
    movieTopRated: [],
    movieCategory: [],
    showCategory: [],

    nowPlayingError: null,
    popularError: null,
    upcomingError: null,
    movieTopRatedError: null,
    movieCategoryError: null,
    showCategoryError: null,
  });

  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [popular, popularError] = await movieApi.popular();
    const [upcoming, upcomingError] = await movieApi.upcoming();
    const [movieTopRated, movieTopRatedError] = await movieApi.topRated();
    const [movieCategory, movieCategoryError] = await movieApi.movieGenre();
    const [showCategory, showCategoryError] = await tvApi.showGenre();

    setResults({
      //public
      nowPlaying,
      popular,
      upcoming,
      movieTopRated,
      movieCategory,
      showCategory,

      //error
      nowPlayingError,
      popularError,
      upcomingError,
      movieTopRatedError,
      movieCategoryError,
      showCategoryError,
    });
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return <MoviePresenter {...results} loading={loading} refreshing={getData} />;
};

export default MovieContainer;
