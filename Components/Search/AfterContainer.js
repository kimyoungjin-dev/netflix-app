import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import FormContainer from "../../Screens/Search/FormContainer";
import ScrollContainer from "../SlideContents/ScrollContainer";
import AfterVertical from "./AfterVertical";

const Container = styled.View`
  background-color: rgb(23, 25, 30);
`;

const SearchRow = styled.View`
  flex-direction: row;
`;

const AfterContainer = ({ movieSearch, tvSearch, loading, onSubmit }) => {
  return (
    <Container>
      <ScrollContainer loading={loading} refreshing={onSubmit}>
        <SearchRow>
          <ScrollView>
            {movieSearch.map((movie, index) => (
              <AfterVertical
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                poster={movie.poster_path}
                rank={index}
                vote={movie.vote_average}
              />
            ))}
          </ScrollView>

          <ScrollView>
            {tvSearch.map((show, index) => (
              <AfterVertical
                key={show.id}
                id={show.id}
                title={show.original_name}
                poster={show.poster_path}
                rank={index}
                vote={show.vote_average}
              />
            ))}
          </ScrollView>
        </SearchRow>
      </ScrollContainer>
    </Container>
  );
};

export default AfterContainer;
