import React from "react";
import Horizontal from "../../Components/Horizontal";
import ScrollContainer from "../../Components/SlideContents/ScrollContainer";
import ScrollHorizontal from "../../Components/SlideContents/ScrollHorizontal";

const MoviePresenter = ({ loading, nowPlaying, popular, upcoming }) => {
  return (
    <ScrollContainer loading={loading}>
      <ScrollHorizontal title={"신작 영화"}>
        {nowPlaying.map((movie) => (
          <Horizontal
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.original_title}
            vote={movie.vote_average}
          />
        ))}
      </ScrollHorizontal>

      <ScrollHorizontal title={"인기 영화"}>
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
      <ScrollHorizontal title={"방금 나온 신작영화"}>
        {upcoming.map((movie) => (
          <Horizontal
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.original_title}
            vote={movie.vote_average}
          />
        ))}
      </ScrollHorizontal>

      <ScrollHorizontal title={"아직안정함"}>
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
    </ScrollContainer>
  );
};

export default MoviePresenter;
