import React from "react";
import AfterContainer from "../../Components/Search/AfterContainer";
import BeforeContainer from "../../Components/Search/BeforeContainer";
import ScrollContainer from "../../Components/SlideContents/ScrollContainer";
import FormContainer from "./FormContainer";

const SearchPresenter = ({
  onSubmit,
  onChange,
  word,
  movieSearch,
  tvSearch,
  moviePopular,
  showPopular,
  loading,
}) => {
  return (
    <>
      <FormContainer onSubmit={onSubmit} onChange={onChange} word={word} />
      <ScrollContainer refreshing={onSubmit}>
        {movieSearch.length > 0 && tvSearch.length > 0 ? (
          <AfterContainer
            onSubmit={onSubmit}
            movieSearch={movieSearch}
            tvSearch={tvSearch}
            loading={loading}
          />
        ) : (
          <BeforeContainer
            loading={loading}
            onSubmit={onSubmit}
            moviePopular={moviePopular}
            showPopular={showPopular}
          />
        )}
      </ScrollContainer>
    </>
  );
};

export default SearchPresenter;
