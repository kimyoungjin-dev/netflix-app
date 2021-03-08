import React from "react";
import styled from "styled-components/native";
import ScrollHorizontal from "../../Components/SlideContents/ScrollHorizontal";
import Horizontal from "../../Components/Horizontal";

const Container = styled.View`
  background-color: black;
  height: 100%;
  padding: 0px 20px;
`;

const Form = styled.View`
  background-color: black;
  height: 30px;
  align-items: center;
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
    <Container>
      <Form>
        <Input
          placeholder={"검색어를 입력하세요"}
          onSubmitEditing={onSubmit}
          onChangeText={onChange}
          value={word}
        />
      </Form>

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
    </Container>
  );
};

export default SearchPresenter;
