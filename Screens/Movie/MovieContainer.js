import React, { useState, useEffect } from "react";
import { movieApi } from "../../api/api";
import MoviePresenter from "./MoviePresenter";

const MovieContainer = () => {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState({
    nowPlaying: [],
    popular: [],
    upcoming: [],
    movieTopRated: [],
    nowPlayingError: null,
    popularError: null,
    upcomingError: null,
    movieTopRatedError: null,
  });

  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [popular, popularError] = await movieApi.popular();
    const [upcoming, upcomingError] = await movieApi.upcoming();
    const [movieTopRated, movieTopRatedError] = await movieApi.topRated();

    setResults({
      nowPlaying,
      popular,
      upcoming,
      movieTopRated,
      nowPlayingError,
      popularError,
      upcomingError,
      movieTopRatedError,
    });
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return <MoviePresenter {...results} loading={loading} />;
};

export default MovieContainer;
