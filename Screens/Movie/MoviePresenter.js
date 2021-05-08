import React from "react";
import Horizontal from "../../Components/Horizontal";
import Slide from "../../Components/Slide";
import ScrollContainer from "../../Components/SlideContents/ScrollContainer";
import ScrollHorizontal from "../../Components/SlideContents/ScrollHorizontal";
import ScrollSwiper from "../../Components/SlideContents/ScrollSwiper";
import SMovieGenre from "../../Components/Genre/SMovieGenre";
import Category from "../../Components/Home/Category";

const MoviePresenter = ({
  nowPlaying,
  popular,
  refreshing,
  loading,
  movieTopRated,
  movieCategory: { genres: movieGenre },
  showCategory: { genres: tvGenre },
}) => {
  return (
    <>
      <Category movieGenre={movieGenre} tvGenre={tvGenre} />

      <ScrollContainer loading={loading} refreshing={refreshing}>
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
        <ScrollHorizontal title={"현재 인기영화"}>
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
        <ScrollHorizontal title={"현재 Top10"}>
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
        <SMovieGenre />
      </ScrollContainer>
    </>
  );
};

export default MoviePresenter;
