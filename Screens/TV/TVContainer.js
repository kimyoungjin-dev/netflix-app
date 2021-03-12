import React, { useState, useEffect } from "react";
import { tvApi, movieApi } from "../../api/api";
import TVPresenter from "./TVPresenter";

const TVContainer = () => {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState({
    topRated: [],
    popular: [],
    airingToday: [],
    thisweek: [],
    topRatedError: null,
    popularError: null,
    airingTodayError: null,
    thisweekError: null,
  });

  const getData = async () => {
    const [topRated, topRatedError] = await tvApi.topRated();
    const [popular, popularError] = await tvApi.popular();
    const [airingToday, airingTodayError] = await tvApi.airingToday();
    const [thisweek, thisweekError] = await tvApi.thisweek();

    setResults({
      topRated,
      topRatedError,
      popular,
      popularError,
      airingToday,
      airingTodayError,
      thisweek,
      thisweekError,
    });
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return <TVPresenter {...results} loading={loading} />;
};

export default TVContainer;
