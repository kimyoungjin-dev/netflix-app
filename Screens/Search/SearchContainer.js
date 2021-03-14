import React, { useState, useEffect } from "react";
import { movieApi, tvApi } from "../../api/api";
import SearchPresenter from "./SearchPresenter";
import * as WebBrowser from "expo-web-browser";

const SearchContainer = () => {
  const [word, setWord] = useState("");

  const [results, setResults] = useState({
    movieSearch: [],
    tvSearch: [],
    movieSearchError: null,
    tvSearchError: null,
  });
  const [loading, setLoading] = useState(true);
  const [contents, setContents] = useState({
    moviePopular: [],
    showPopular: [],
    moviePopularError: null,
    showPopularError: null,
  });

  const getData = async () => {
    const [moviePopular, moviePopularError] = await movieApi.popular();
    const [showPopular, showPopularError] = await tvApi.popular();
    setContents({
      moviePopular,
      showPopular,
      showPopularError,
      moviePopularError,
    });
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const onChange = (text) => setWord(text);
  const onSubmit = async () => {
    if (word === "") {
      return;
    }
    const [movieSearch, movieSearchError] = await movieApi.search(word);
    const [tvSearch, tvSearchError] = await tvApi.search(word);

    setResults({
      movieSearch,
      movieSearchError,
      tvSearch,
      tvSearchError,
    });
  };
  const openBrowser = async (url) => {
    await WebBrowser.openBrowserAsync(url);
  };

  return (
    <SearchPresenter
      onChange={onChange}
      onSubmit={onSubmit}
      {...results}
      word={word}
      {...contents}
      loading={loading}
      openBrowser={openBrowser}
    />
  );
};

export default SearchContainer;
