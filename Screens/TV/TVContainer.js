import React, { useState, useEffect } from "react";
import { tvApi, movieApi } from "../../api";
import TVPresenter from "./TVPresenter";

const TVContainer = () => {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState({
    topRated: [],
    popular: [],
    airingToday: [],
    thisweek: [],
    movieCategory: [],
    showCategory: [],
    topRatedError: null,
    popularError: null,
    airingTodayError: null,
    thisweekError: null,
    movieCategoryError: null,
    showCategoryError: null,
  });

  const getData = async () => {
    const [topRated, topRatedError] = await tvApi.topRated();
    const [popular, popularError] = await tvApi.popular();
    const [airingToday, airingTodayError] = await tvApi.airingToday();
    const [thisweek, thisweekError] = await tvApi.thisweek();
    const [movieCategory, movieCategoryError] = await movieApi.movieGenre();
    const [showCategory, showCategoryError] = await tvApi.showGenre();

    setResults({
      topRated,
      topRatedError,
      popular,
      popularError,
      airingToday,
      airingTodayError,
      thisweek,
      thisweekError,
      movieCategory,
      movieCategoryError,
      showCategory,
      showCategoryError,
    });
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return <TVPresenter {...results} loading={loading} />;
};

export default TVContainer;
