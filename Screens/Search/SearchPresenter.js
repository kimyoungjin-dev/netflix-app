import React from "react";
import styled from "styled-components/native";
import ScrollContainer from "../../Components/SlideContents/ScrollContainer";
import { TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import ScrollHorizontal from "../../Components/SlideContents/ScrollHorizontal";
import Horizontal from "../../Components/Horizontal";

const Form = styled.View`
  background-color: rgb(23, 25, 30);
  align-items: center;
  margin-top: 10px;
  justify-content: flex-start;
  height: 40px;
  flex-direction: row;
  border-radius: 4px;
`;

const SearchPresenter = ({
  onSubmit,
  onChange,
  word,
  results: { movieSearch, tvSearch },
  popular,
}) => {
  return (
    <ScrollContainer>
      <Form>
        <FontAwesome
          name="search"
          size={22}
          color="white"
          style={{ marginRight: 10 }}
        />

        <TextInput
          style={{ fontSize: 20, color: "white" }}
          placeholder="검색"
          placeholderTextColor="white"
          value={word}
          onChangeText={onChange}
          onSubmitEditing={onSubmit}
          autoCapitalize="none"
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
              isTV={true}
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
