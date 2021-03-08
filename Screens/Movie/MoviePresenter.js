import React from "react";
import { ActivityIndicator, Dimensions, ScrollView, Text } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import Slide from "../../Components/Slide";
import Title from "../../Components/Title";
import Horizontal from "../../Components/Horizontal";
import Vertical from "../../Components/Vertical";
import ScrollContainer from "../../Components/SlideContents/ScrollContainer";
import ScrollSwiper from "../../Components/SlideContents/ScrollSwiper";
import ScrollVertical from "../../Components/SlideContents/ScrollVertical";
import ScrollHorizontal from "../../Components/SlideContents/ScrollHorizontal";

const MoviePresenter = ({ loading, nowPlaying, popular, upcoming }) => {
  return (
    <ScrollContainer loading={loading}>
      <ScrollSwiper>
        {nowPlaying.map((movie) => (
          <Slide
            key={movie.id}
            id={movie.id}
            backDrop={movie.backdrop_path}
            overView={movie.overview}
            poster={movie.poster_path}
            title={movie.original_title}
            vote={movie.vote_average}
            year={movie.release_date}
          />
        ))}
      </ScrollSwiper>

      <ScrollHorizontal title={"Popular Movies.."}>
        {popular.map((movie) => (
          <Horizontal
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.original_title}
            vote={movie.vote_average}
          />
        ))}
      </ScrollHorizontal>

      <ScrollVertical title={"Up coming Movies"}>
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
      </ScrollVertical>
    </ScrollContainer>
  );
};

export default MoviePresenter;
