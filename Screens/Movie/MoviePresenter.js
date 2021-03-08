import React from "react";
import { ActivityIndicator, Dimensions, ScrollView, Text } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import Slide from "../../Components/Slide";
import Title from "../../Components/Title";
import Horizontal from "../../Components/Horizontal";
import Vertical from "../../Components/Vertical";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SlideContainer = styled.View`
  height: ${HEIGHT / 4}px;
  width: 100%;
  margin-bottom: 10px;
`;

const Container = styled.View`
  margin-top: 20px;
`;

const MoviePresenter = ({ loading, nowPlaying, popular, upcoming }) => {
  console.log(popular);
  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: loading ? "center" : "flex-start",
        flex: loading ? 1 : "auto",
        paddingLeft: 20,
        paddingRight: 20,
      }}
      style={{
        backgroundColor: "rgb(19, 18, 20)",
      }}
    >
      {loading ? (
        <ActivityIndicator color={"white"} size="large" />
      ) : (
        <>
          <SlideContainer>
            <Swiper
              loop
              timeout={3}
              springConfig={{ speed: 2 }}
              controlsEnabled={false}
            >
              {nowPlaying.map((movie) => (
                <Slide
                  key={movie.id}
                  id={movie.id}
                  poster={movie.poster_path}
                  title={movie.original_title}
                  year={movie.release_date}
                  overView={movie.overview}
                  backDrop={movie.backdrop_path}
                />
              ))}
            </Swiper>
          </SlideContainer>

          <Container>
            <Title title={"Popular Movies..."} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {popular.map((movie) => (
                <Horizontal
                  key={movie.id}
                  id={movie.id}
                  poster={movie.poster_path}
                  title={movie.original_title}
                  vote={movie.vote_average}
                />
              ))}
            </ScrollView>
          </Container>

          <Container>
            <Title title={"Upcoming Movies..."} />
            <ScrollView>
              {upcoming.map((movie) => (
                <Vertical
                  key={movie.id}
                  id={movie.id}
                  poster={movie.poster_path}
                  title={movie.original_title}
                  vote={movie.vote_average}
                  overView={movie.overview}
                />
              ))}
            </ScrollView>
          </Container>
        </>
      )}
    </ScrollView>
  );
};

export default MoviePresenter;
