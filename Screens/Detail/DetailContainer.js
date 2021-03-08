import React, { useLayoutEffect, useState, useEffect } from "react";
import { movieApi, tvApi } from "../../api";
import DetailPresenter from "./DetailPresenter";
import * as WebBrowser from "expo-web-browser";

const DetailContainer = ({ navigation, route: { params } }) => {
  const { backDrop, id, overView, poster, title, vote, year } = params;
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState({
    movies: [],
    moviesError: null,
  });

  const getData = async () => {
    const [movies, moviesError] = await movieApi.movieDetail(id);
    setResults({
      backDrop: movies.backdrop_path,
      overView: movies.overview,
      poster: movies.poster_path,
      title: movies.original_title,
      vote: movies.vote_average,
      year: movies.release_date,
      ...movies,
    });
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({ title });
  }, []);

  const openBrowser = async (url) => {
    await WebBrowser.openBrowserAsync(url);
  };

  return (
    <DetailPresenter
      results={results}
      loading={loading}
      openBrowser={openBrowser}
    />
  );
};

export default DetailContainer;
