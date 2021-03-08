import React from "react";
import styled from "styled-components/native";
import ScrollHorizontal from "../../Components/SlideContents/ScrollHorizontal";
import Horizontal from "../../Components/Horizontal";
import ScrollContainer from "../../Components/SlideContents/ScrollContainer";

const Form = styled.View`
  background-color: rgb(19, 18, 20);
  height: 30px;
  align-items: center;
  margin: 50px 0px;
`;

const Input = styled.TextInput`
  background-color: white;
  width: 80%;
  height: 100%;
  border-radius: 50px;
`;

const SearchPresenter = ({
  onSubmit,
  onChange,
  word,
  results: { movieSearch, tvSearch },
}) => {
  return (
    <ScrollContainer>
      <Form>
        <Input
          placeholder={"검색어를 입력하세요"}
          onSubmitEditing={onSubmit}
          onChangeText={onChange}
          value={word}
        />
      </Form>

      {movieSearch.length > 0 && (
        <ScrollHorizontal title={"Movie results"}>
          {movieSearch.map((movie) => (
            <Horizontal
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.original_title}
              vote={movie.vote_average}
            />
          ))}
        </ScrollHorizontal>
      )}

      {tvSearch.length > 0 && (
        <ScrollHorizontal title={"show results"}>
          {tvSearch.map((show) => (
            <Horizontal
              key={show.id}
              id={show.id}
              poster={show.poster_path}
              title={show.original_name}
              vote={show.vote_average}
            />
          ))}
        </ScrollHorizontal>
      )}
    </ScrollContainer>
  );
};

export default SearchPresenter;
