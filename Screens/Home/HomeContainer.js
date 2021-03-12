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

    //tv
    const [topRated, topRatedError] = await tvApi.topRated();
    const [showPopular, showPopularError] = await tvApi.popular();
    const [airingToday, airingTodayError] = await tvApi.airingToday();
    const [thisweek, thisweekError] = await tvApi.thisweek();
    const [showCategory, showCategoryError] = await tvApi.showGenre();
    const [animation, animationError] = await tvApi.showAnimation(16);
    const [variety, varietyError] = await tvApi.showVariety(10764);
    const [talk, talkError] = await tvApi.showTalk(10767);

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
      showPopular,
      airingToday,
      thisweek,
      variety,
      talk,
      animation,
      topRatedError,
      showPopularError,
      airingTodayError,
      thisweekError,
      showCategory,
      showCategoryError,
      animationError,
      varietyError,
      talkError,
    });
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return <HomePresenter {...results} loading={loading} {...showresult} />;
};

export default MovieContainer;
