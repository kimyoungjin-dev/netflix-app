import React from "react";
import Horizontal from "../../Components/Horizontal";
import Slide from "../../Components/Slide";
import ScrollContainer from "../../Components/SlideContents/ScrollContainer";
import ScrollHorizontal from "../../Components/SlideContents/ScrollHorizontal";
import ScrollSwiper from "../../Components/SlideContents/ScrollSwiper";
import ScrollVertical from "../../Components/SlideContents/ScrollVertical";
import Vertical from "../../Components/Vertical";

const MoviePresenter = ({
  nowPlaying,
  popular,
  upcoming,
  movieTopRated,
  loading,
}) => {
  return (
    <ScrollContainer loading={loading}>
      <ScrollSwiper>
        {nowPlaying.map((movie, index) => (
          <Slide
            key={movie.id}
            id={movie.id}
            backDrop={movie.backdrop_path}
            overView={movie.overview}
            poster={movie.poster_path}
            title={movie.original_title}
            vote={movie.vote_average}
            rank={index}
          />
        ))}
      </ScrollSwiper>

      <ScrollHorizontal title={"인기영화"}>
        {popular.map((movie, index) => (
          <Horizontal
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.original_title}
            vote={movie.vote_average}
            rank={index}
          />
        ))}
      </ScrollHorizontal>

      <ScrollHorizontal title={"Top10 영화"}>
        {movieTopRated.map((movie, index) => (
          <Horizontal
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.original_name}
            vote={movie.vote_average}
            rank={index}
          />
        ))}
      </ScrollHorizontal>

      <ScrollVertical title={"방금나온 영화"}>
        {upcoming.map((movie, index) => (
          <Vertical
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.original_title}
            vote={movie.vote_average}
            overView={movie.overview}
            rank={index}
          />
        ))}
      </ScrollVertical>
    </ScrollContainer>
  );
};

export default MoviePresenter;
