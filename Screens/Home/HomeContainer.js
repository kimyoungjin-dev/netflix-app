import React, { useState, useEffect } from "react";
import { movieApi, tvApi } from "../../api";
import HomePresenter from "./HomePresenter";

const MovieContainer = () => {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState({
    nowPlaying: [],
    popular: [],
    upcoming: [],
    movieCategory: [],
    nowPlayingError: null,
    popularError: null,
    upcomingError: null,
    movieCategoryError: null,
  });

  const [showresult, setShowresult] = useState({
    topRated: [],
    showPopular: [],
    airingToday: [],
    thisweek: [],
    showCategory: [],

    topRatedError: null,
    showPopularError: null,
    airingTodayError: null,
    thisweekError: null,
    showCategoryError: null,
  });

  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [popular, popularError] = await movieApi.popular();
    const [upcoming, upcomingError] = await movieApi.upcoming();
    const [movieCategory, movieCategoryError] = await movieApi.movieGenre();
    const [topRated, topRatedError] = await tvApi.topRated();
    const [showPopular, showPopularError] = await tvApi.popular();
    const [airingToday, airingTodayError] = await tvApi.airingToday();
    const [thisweek, thisweekError] = await tvApi.thisweek();
    const [showCategory, showCategoryError] = await tvApi.showGenre();
    console.log(movieCategory, showCategory);

    setResults({
      nowPlaying,
      popular,
      upcoming,
      nowPlayingError,
      popularError,
      upcomingError,
      movieCategory,
      movieCategoryError,
    });

    setShowresult({
      topRated,
      topRatedError,
      showPopular,
      showPopularError,
      airingToday,
      airingTodayError,
      thisweek,
      thisweekError,
      showCategory,
      showCategoryError,
    });
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return <HomePresenter {...results} loading={loading} {...showresult} />;
};

export default MovieContainer;
