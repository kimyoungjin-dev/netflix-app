import React, { useState, useEffect } from "react";
import { movieApi } from "../../api/api";
import { apiMovieGenre } from "../../api/MovieGenreApi";

import MoviePresenter from "./MoviePresenter";

const MovieContainer = () => {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState({
    //public
    nowPlaying: [],
    popular: [],
    upcoming: [],
    movieTopRated: [],

    //genre
    action: [],
    adventure: [],
    horror: [],
    mystery: [],
    sf: [],
    thriller: [],
    crime: [],
    fantasy: [],
    romance: [],

    nowPlayingError: null,
    popularError: null,
    upcomingError: null,
    movieTopRatedError: null,

    //genreError
    actionError: null,
    adventureError: null,
    horrorError: null,
    mysteryError: null,
    sfError: null,
    thrillerError: null,
    crimeError: null,
    fantasyError: null,
    romanceError: null,

    //gereError
  });

  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [popular, popularError] = await movieApi.popular();
    const [upcoming, upcomingError] = await movieApi.upcoming();
    const [movieTopRated, movieTopRatedError] = await movieApi.topRated();
    const [movieGenre, movieGenreError] = await movieApi.movieGenre(); //genre
    //genre
    const [action, actionError] = await apiMovieGenre.movieAction(28);
    const [adventure, adventureError] = await apiMovieGenre.movieAdventure(12);
    const [horror, horrorError] = await apiMovieGenre.movieHorror(27);
    const [mystery, mysteryError] = await apiMovieGenre.movieMystery(9648);
    const [sf, sfError] = await apiMovieGenre.movieSf(878);
    const [thriller, thrillerError] = await apiMovieGenre.movieThriller(53);
    const [crime, crimeError] = await apiMovieGenre.movieCrime(80);
    const [fantasy, fantasyError] = await apiMovieGenre.movieFantasy(14);
    const [romance, romanceError] = await apiMovieGenre.movieRomance(10752);

    setResults({
      //public
      nowPlaying,
      popular,
      upcoming,
      movieTopRated,

      //genre

      action,
      adventure,
      horror,
      mystery,
      sf,
      thriller,
      crime,
      fantasy,
      romance,

      //error
      nowPlayingError,
      popularError,
      upcomingError,
      movieTopRatedError,

      //genreError
      actionError,
      adventureError,
      horrorError,
      mysteryError,
      sfError,
      thrillerError,
      crimeError,
      fantasyError,
      romanceError,
    });
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(results);
  return <MoviePresenter {...results} loading={loading} refreshing={getData} />;
};

export default MovieContainer;
