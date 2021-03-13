import React from "react";
import { ScrollView, Text } from "react-native";
import styled from "styled-components/native";
import FormContainer from "../../Screens/Search/FromContainer";
import ScrollContainer from "../SlideContents/ScrollContainer";
import BeforeVertical from "./BeforeVertical";

const Container = styled.View`
  background-color: rgb(23, 25, 30);
`;

const BeforeContainer = ({
  onSubmit,
  onChange,
  word,
  moviePopular,
  showPopular,
  loading,
}) => {
  return (
    <Container>
      <FormContainer onSubmit={onSubmit} onChange={onChange} word={word} />
      <ScrollContainer loading={loading}>
        <Text
          style={{
            color: "white",
            fontSize: 25,
            fontWeight: "bold",
            marginBottom: 5,
          }}
        >
          인기검색어
        </Text>

        <ScrollView>
          {moviePopular.map((movie, index) => (
            <BeforeVertical
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              poster={movie.poster_path}
              rank={index}
              vote={movie.vote_average}
            />
          ))}

          {showPopular.map((show, index) => (
            <BeforeVertical
              key={show.id}
              id={show.id}
              title={show.original_name}
              poster={show.poster_path}
              rank={index}
              vote={show.vote_average}
            />
          ))}
        </ScrollView>
      </ScrollContainer>
    </Container>
  );
};

export default BeforeContainer;
