import React, { useState, useEffect } from "react";
import { movieApi, tvApi } from "../../api/api";
import { apiTVGenre } from "../../api/TVGenreApi";
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
    animation: [],
    variety: [],
    talk: [],
    drama: [],
    sfFantasy: [],
    actionAdventure: [],
    documentary: [],
    comedy: [],
    mystery: [],

    showPopularError: null,
    showCategoryError: null,
    animationError: null,
    varietyError: null,
    talkError: null,
    dramaError: null,
    sfFantasyError: null,
    actionAdventureError: null,
    documentaryError: null,
    comedyError: null,
    mysteryError: null,
  });

  const getData = async () => {
    //movie
    const [moviePopular, moviePopularError] = await movieApi.popular();
    const [movieCategory, movieCategoryError] = await movieApi.movieGenre();

    //tv
    const [showPopular, showPopularError] = await tvApi.popular();
    const [showCategory, showCategoryError] = await tvApi.showGenre();

    //genre
    const [animation, animationError] = await apiTVGenre.showAnimation(16);
    const [variety, varietyError] = await apiTVGenre.showVariety(10764);
    const [talk, talkError] = await apiTVGenre.showTalk(10767);
    const [drama, dramaError] = await apiTVGenre.showDrama(18);
    const [sfFantasy, sfFantasyError] = await apiTVGenre.showSfFantasy(10765);
    const [
      actionAdventure,
      actionAdventureError,
    ] = await apiTVGenre.showActionAdventure(10759);
    const [documentary, documentaryError] = await apiTVGenre.showDocumentary(
      99
    );
    const [comedy, comedyError] = await apiTVGenre.showComedy(35);
    const [mystery, mysteryError] = await apiTVGenre.showMystery(9648);

    setResults({
      moviePopular,
      moviePopularError,
      movieCategory,
      movieCategoryError,
    });

    setShowresult({
      showPopular,
      variety, //genre
      talk,
      animation,
      drama,
      sfFantasy,
      actionAdventure,
      documentary,
      comedy,
      mystery,
      showPopularError,
      showCategory,
      showCategoryError,
      animationError,
      varietyError,
      talkError,
      dramaError,
      sfFantasyError,
      actionAdventureError,
      documentaryError,
      comedyError,
      mysteryError,
    });
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return <HomePresenter {...results} loading={loading} {...showresult} />;
};

export default HomeContainer;
