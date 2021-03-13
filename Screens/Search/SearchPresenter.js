import React from "react";
import styled from "styled-components/native";
import ScrollContainer from "../../Components/SlideContents/ScrollContainer";
import { ScrollView, Text, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import ScrollHorizontal from "../../Components/SlideContents/ScrollHorizontal";
import Horizontal from "../../Components/Horizontal";
import SearchVertical from "../../Components/Search/SearchVertical";
import Vertial from "../../Components/Vertical";

const Container = styled.View`
  background-color: rgb(23, 25, 30);
`;

const Form = styled.View`
  background-color: rgb(23, 25, 30);
  align-items: center;
  margin-top: 10px;
  justify-content: flex-start;
  height: 40px;
  flex-direction: row;
`;

const SearchNext = styled.View``;

const SearchPrevious = styled.View``;

const SearchPresenter = ({
  onSubmit,
  onChange,
  word,
  results: { movieSearch, tvSearch },
  moviePopular,
  showPopular,
  loading,
  openBrowser,
}) => {
  return (
    <>
      {movieSearch.length > 0 && tvSearch.length > 0 ? (
        <ScrollContainer>
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
      ) : (
        <Container>
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
          <ScrollContainer>
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
                <SearchVertical
                  openBrowser={openBrowser}
                  key={movie.id}
                  id={movie.id}
                  title={movie.original_title}
                  poster={movie.poster_path}
                  rank={index}
                  vote={movie.vote_average}
                />
              ))}
            </ScrollView>
          </ScrollContainer>
        </Container>
      )}
    </>
  );
};

export default SearchPresenter;
