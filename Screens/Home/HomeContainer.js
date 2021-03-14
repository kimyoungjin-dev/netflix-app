import React, { useState, useEffect } from "react";
import { movieApi, tvApi } from "../../api/api";
import HomePresenter from "./HomePresenter";

const HomeContainer = () => {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState({
    moviePopular: [],
    movieCategory: [],
    movieCategoryError: null,
    moviePopularError: null,
  });

  const [showresult, setShowresult] = useState({
    showPopular: [],
    showCategory: [],
    showPopularError: null,
    showCategoryError: null,
  });

  const getData = async () => {
    //movie
    const [moviePopular, moviePopularError] = await movieApi.popular();
    const [movieCategory, movieCategoryError] = await movieApi.movieGenre();

    //tv
    const [showPopular, showPopularError] = await tvApi.popular();
    const [showCategory, showCategoryError] = await tvApi.showGenre();

    setResults({
      moviePopular,
      moviePopularError,
      movieCategory,
      movieCategoryError,
    });

    setShowresult({
      showPopular,
      showPopularError,
      showCategory,
      showCategoryError,
    });
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <HomePresenter
      {...results}
      loading={loading}
      {...showresult}
      refreshing={getData}
    />
  );
};

export default HomeContainer;
