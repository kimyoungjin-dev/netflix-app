import React, { useLayoutEffect, useState, useEffect } from "react";
import { creditApi, movieApi, tvApi } from "../../api";
import DetailPresenter from "./DetailPresenter";
import * as WebBrowser from "expo-web-browser";

const DetailContainer = ({ navigation, route: { params } }) => {
  const { backDrop, id, overView, poster, title, vote, year, isTV } = params;

  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState({
    Detail: [],
    DetailError: null,
  });

  const getData = async () => {
    const [Detail, DetailError] = isTV
      ? await tvApi.showDetail(id)
      : await movieApi.movieDetail(id);

    const [{ cast, crew }, getCreditError] = isTV
      ? await tvApi.showCredit(id)
      : await movieApi.movieCredit(id);

    setResults({
      backDrop: Detail.backdrop_path,
      overView: Detail.overview,
      poster: Detail.poster_path,
      title: Detail.original_title || Detail.original_name,
      vote: Detail.vote_average,
      year: Detail.release_date,
      ...Detail,
      cast,
      crew,
    });
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({ title: "" });
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
