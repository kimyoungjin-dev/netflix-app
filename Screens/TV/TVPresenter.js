import React from "react";
import Horizontal from "../../Components/Horizontal";
import Slide from "../../Components/Slide";
import ScrollContainer from "../../Components/SlideContents/ScrollContainer";
import ScrollHorizontal from "../../Components/SlideContents/ScrollHorizontal";
import ScrollSwiper from "../../Components/SlideContents/ScrollSwiper";
import STVGenre from "../../Components/Genre/STVGenre";
import Category from "../../Components/Home/Category";

const TVPresenter = ({
  topRated,
  popular,
  airingToday,
  thisweek,
  loading,
  refreshing,
  movieCategory: { genres: movieGenre },
  showCategory: { genres: tvGenre },
}) => {
  return (
    <>
      <Category movieGenre={movieGenre} tvGenre={tvGenre} />
      <ScrollContainer loading={loading} refreshing={refreshing}>
        <ScrollSwiper>
          {topRated.map((show, index) => (
            <Slide
              key={show.id}
              id={show.id}
              backDrop={show.backdrop_path}
              overView={show.overview}
              poster={show.poster_path}
              title={show.original_name}
              vote={show.vote_average}
              rank={index}
            />
          ))}
        </ScrollSwiper>

        <ScrollHorizontal title={"인기 TV프로그램"}>
          {popular.map((show, index) => (
            <Horizontal
              isTV={true}
              key={show.id}
              id={show.id}
              poster={show.poster_path}
              title={show.original_name}
              vote={show.vote_average}
              rank={index}
            />
          ))}
        </ScrollHorizontal>

        <ScrollHorizontal title={"이번주에 뜨는 TV프로그램"}>
          {thisweek.map((show, index) => (
            <Horizontal
              isTV={true}
              key={show.id}
              id={show.id}
              poster={show.poster_path}
              title={show.original_name}
              vote={show.vote_average}
              rank={index}
            />
          ))}
        </ScrollHorizontal>

        <ScrollHorizontal title={"오늘 방영한 TV프로그램"}>
          {airingToday.map((show, index) => (
            <Horizontal
              isTV={true}
              key={show.id}
              id={show.id}
              poster={show.poster_path}
              title={show.original_name}
              vote={show.vote_average}
              rank={index}
            />
          ))}
        </ScrollHorizontal>

        <STVGenre />
      </ScrollContainer>
    </>
  );
};

export default TVPresenter;
