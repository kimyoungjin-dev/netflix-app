import React, { useState } from "react";
import { movieApi, tvApi } from "../../api/api";
import SearchPresenter from "./SearchPresenter";

const SearchContainer = () => {
  const [word, setWord] = useState("");
  const [results, setResults] = useState({
    movieSearch: [],
    tvSearch: [],
    movieSearchError: null,
    tvSearchError: null,
  });

  const onChange = (text) => setWord(text);
  const onSubmit = async () => {
    const [movieSearch, movieSearchError] = await movieApi.search(word);
    const [tvSearch, tvSearchError] = await tvApi.search(word);

    setResults({
      movieSearch,
      movieSearchError,
      tvSearch,
      tvSearchError,
    });
  };

  return (
    <SearchPresenter
      onChange={onChange}
      onSubmit={onSubmit}
      results={results}
      word={word}
    />
  );
};

export default SearchContainer;
