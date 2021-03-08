import React from "react";
import { ActivityIndicator, Dimensions, ScrollView } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import Slide from "../../Components/Slide";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Header = styled.View`
  height: ${HEIGHT / 2}px;
  width: 100%;
`;

const MoviePresenter = ({ loading, nowPlaying, popular, upcoming }) => {
  console.log(nowPlaying);
  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: loading ? "center" : "flex-start",
        flex: loading ? 1 : "auto",
      }}
      style={{
        backgroundColor: "rgb(19, 18, 20)",
      }}
    >
      {loading ? (
        <ActivityIndicator color={"white"} size="large" />
      ) : (
        <Header>
          <Swiper loop timeout={3} controlsEnabled={false}>
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
        </Header>
      )}
    </ScrollView>
  );
};

export default MoviePresenter;
