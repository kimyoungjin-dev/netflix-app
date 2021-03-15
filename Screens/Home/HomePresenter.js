import React from "react";
import Horizontal from "../../Components/Horizontal";
import ScrollContainer from "../../Components/SlideContents/ScrollContainer";
import ScrollHorizontal from "../../Components/SlideContents/ScrollHorizontal";
import Category from "../../Components/Home/Category";
import SMovieGenre from "../../Components/Genre/SMovieGenre";
import STVGenre from "../../Components/Genre/STVGenre";

const HomePresenter = ({
  moviePopular,
  showPopular,
  loading,
  movieCategory: { genres: movieGenre },
  showCategory: { genres: tvGenre },
  refreshing,
}) => {
  return (
    <>
      <Category movieGenre={movieGenre} tvGenre={tvGenre} />
      <ScrollContainer loading={loading} refreshing={refreshing}>
        <ScrollHorizontal title={"Netflix 오리지날"}>
          {moviePopular.map((movie, index) => (
            <Horizontal
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.original_title}
              vote={movie.vote_average}
              rank={index}
            />
          ))}

          {showPopular.map((show, index) => (
            <Horizontal
              key={show.id}
              id={show.id}
              poster={show.poster_path}
              title={show.original_name}
              vote={show.vote_average}
              rank={index}
              isTV={true}
            />
          ))}
        </ScrollHorizontal>

        <SMovieGenre />
        <STVGenre />
      </ScrollContainer>
    </>
  );
};

export default HomePresenter;
