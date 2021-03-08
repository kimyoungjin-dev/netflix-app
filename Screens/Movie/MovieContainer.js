import React, { useState, useEffect } from "react";
import { movieApi } from "../../api";
import MoviePresenter from "./MoviePresenter";

const MovieContainer = () => {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState({
    nowPlaying: [],
    popular: [],
    upcoming: [],
    nowPlayingError: null,
    popularError: null,
    upcomingError: null,
  });

  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [popular, popularError] = await movieApi.popular();
    const [upcoming, upcomingError] = await movieApi.upcoming();
    setResults({
      nowPlaying,
      popular,
      upcoming,
      nowPlayingError,
      popularError,
      upcomingError,
    });
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return <MoviePresenter {...results} loading={loading} />;
};

export default MovieContainer;
