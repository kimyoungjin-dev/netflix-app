import React from "react";
import Horizontal from "../../Components/Horizontal";
import Slide from "../../Components/Slide";
import ScrollContainer from "../../Components/SlideContents/ScrollContainer";
import ScrollHorizontal from "../../Components/SlideContents/ScrollHorizontal";
import ScrollSwiper from "../../Components/SlideContents/ScrollSwiper";
import Vertical from "../../Components/Vertical";

const MoviePresenter = ({
  nowPlaying,
  popular,
  upcoming, //later
  movieTopRated,
  loading,
  action,
  adventure,
  horror,
  mystery,
  sf,
  thriller,
  crime,
  fantasy,
  romance,
  refreshing,
}) => {
  return (
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
      <ScrollHorizontal title={"액션&&어드벤쳐 영화"}>
        {action.map((movie, index) => (
          <Horizontal
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.original_title}
            vote={movie.vote_average}
            overView={movie.overview}
            rank={index}
          />
        ))}

        {adventure.map((movie, index) => (
          <Horizontal
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.original_title}
            vote={movie.vote_average}
            overView={movie.overview}
            rank={index}
          />
        ))}
      </ScrollHorizontal>

      <ScrollHorizontal title={"미스테리&&공포 영화"}>
        {horror.map((movie, index) => (
          <Horizontal
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.original_title}
            vote={movie.vote_average}
            overView={movie.overview}
            rank={index}
          />
        ))}

        {mystery.map((movie, index) => (
          <Horizontal
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.original_title}
            vote={movie.vote_average}
            overView={movie.overview}
            rank={index}
          />
        ))}
      </ScrollHorizontal>

      <ScrollHorizontal title={"SF 영화"}>
        {sf.map((movie, index) => (
          <Horizontal
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.original_title}
            vote={movie.vote_average}
            overView={movie.overview}
            rank={index}
          />
        ))}
      </ScrollHorizontal>

      <ScrollHorizontal title={"범죄&스릴러 영화"}>
        {thriller.map((movie, index) => (
          <Horizontal
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.original_title}
            vote={movie.vote_average}
            overView={movie.overview}
            rank={index}
          />
        ))}

        {crime.map((movie, index) => (
          <Horizontal
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.original_title}
            vote={movie.vote_average}
            overView={movie.overview}
            rank={index}
          />
        ))}
      </ScrollHorizontal>

      <ScrollHorizontal title={"판타지 영화"}>
        {fantasy.map((movie, index) => (
          <Horizontal
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.original_title}
            vote={movie.vote_average}
            overView={movie.overview}
            rank={index}
          />
        ))}
      </ScrollHorizontal>

      <ScrollHorizontal title={"로맨스 영화"}>
        {romance.map((movie, index) => (
          <Horizontal
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.original_title}
            vote={movie.vote_average}
            overView={movie.overview}
            rank={index}
          />
        ))}
      </ScrollHorizontal>
    </ScrollContainer>
  );
};

export default MoviePresenter;
