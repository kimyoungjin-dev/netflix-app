import React, { useState, useEffect } from "react";
import { apiMovieGenre } from "../../api/MovieGenreApi";
import Horizontal from "../Horizontal";
import ScrollHorizontal from "../SlideContents/ScrollHorizontal";

const SMovieGenre = () => {
  const [loading, setLoading] = useState(true);
  const [movieGenreResult, setMovieGenreResult] = useState({
    action: [],
    adventure: [],
    horror: [],
    movieMystery: [],
    sf: [],
    thriller: [],
    crime: [],
    fantasy: [],
    romance: [],

    //genreError
    actionError: null,
    adventureError: null,
    horrorError: null,
    movieMysteryError: null,
    sfError: null,
    thrillerError: null,
    crimeError: null,
    fantasyError: null,
    romanceError: null,
  });

  const getData = async () => {
    const [action, actionError] = await apiMovieGenre.movieAction(28);
    const [adventure, adventureError] = await apiMovieGenre.movieAdventure(12);
    const [horror, horrorError] = await apiMovieGenre.movieHorror(27);
    const [movieMystery, movieMysteryError] = await apiMovieGenre.movieMystery(
      9648
    );
    const [sf, sfError] = await apiMovieGenre.movieSf(878);
    const [thriller, thrillerError] = await apiMovieGenre.movieThriller(53);
    const [crime, crimeError] = await apiMovieGenre.movieCrime(80);
    const [fantasy, fantasyError] = await apiMovieGenre.movieFantasy(14);
    const [romance, romanceError] = await apiMovieGenre.movieRomance(10752);

    setMovieGenreResult({
      action,
      adventure,
      horror,
      movieMystery,
      sf,
      thriller,
      crime,
      fantasy,
      romance,
      actionError,
      adventureError,
      horrorError,
      movieMysteryError,
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

  return (
    <>
      <ScrollHorizontal title={"액션&&어드벤쳐 영화"}>
        {movieGenreResult.action.map((movie, index) => (
          <Horizontal
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.original_title}
            vote={movie.vote_average}
            overView={movie.overview}
            rank={index}
          />
        ))}

        {movieGenreResult.adventure.map((movie, index) => (
          <Horizontal
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.original_title}
            vote={movie.vote_average}
            overView={movie.overview}
            rank={index}
          />
        ))}
      </ScrollHorizontal>

      <ScrollHorizontal title={"미스테리&&공포 영화"}>
        {movieGenreResult.horror.map((movie, index) => (
          <Horizontal
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.original_title}
            vote={movie.vote_average}
            overView={movie.overview}
            rank={index}
          />
        ))}

        {movieGenreResult.movieMystery.map((movie, index) => (
          <Horizontal
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.original_title}
            vote={movie.vote_average}
            overView={movie.overview}
            rank={index}
          />
        ))}
      </ScrollHorizontal>

      <ScrollHorizontal title={"SF 영화"}>
        {movieGenreResult.sf.map((movie, index) => (
          <Horizontal
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.original_title}
            vote={movie.vote_average}
            overView={movie.overview}
            rank={index}
          />
        ))}
      </ScrollHorizontal>

      <ScrollHorizontal title={"범죄&스릴러 영화"}>
        {movieGenreResult.thriller.map((movie, index) => (
          <Horizontal
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.original_title}
            vote={movie.vote_average}
            overView={movie.overview}
            rank={index}
          />
        ))}

        {movieGenreResult.crime.map((movie, index) => (
          <Horizontal
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.original_title}
            vote={movie.vote_average}
            overView={movie.overview}
            rank={index}
          />
        ))}
      </ScrollHorizontal>

      <ScrollHorizontal title={"판타지 영화"}>
        {movieGenreResult.fantasy.map((movie, index) => (
          <Horizontal
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.original_title}
            vote={movie.vote_average}
            overView={movie.overview}
            rank={index}
          />
        ))}
      </ScrollHorizontal>

      <ScrollHorizontal title={"로맨스 영화"}>
        {movieGenreResult.romance.map((movie, index) => (
          <Horizontal
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.original_title}
            vote={movie.vote_average}
            overView={movie.overview}
            rank={index}
          />
        ))}
      </ScrollHorizontal>
    </>
  );
};

export default SMovieGenre;
