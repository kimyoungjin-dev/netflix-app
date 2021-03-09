import React from "react";
import Horizontal from "../../Components/Horizontal";
import Slide from "../../Components/Slide";
import ScrollContainer from "../../Components/SlideContents/ScrollContainer";
import ScrollHorizontal from "../../Components/SlideContents/ScrollHorizontal";
import ScrollSwiper from "../../Components/SlideContents/ScrollSwiper";
import ScrollVertical from "../../Components/SlideContents/ScrollVertical";
import Vertical from "../../Components/Vertical";

const TVPresenter = ({ topRated, popular, airingToday, thisweek, loading }) => {
  return (
    <ScrollContainer loading={loading}>
      <ScrollSwiper>
        {topRated.map((show) => (
          <Slide
            isTV={true}
            key={show.id}
            id={show.id}
            backDrop={show.backdrop_path}
            overView={show.overview}
            poster={show.poster_path}
            title={show.original_name}
            vote={show.vote_average}
            year={show.first_air_date}
          />
        ))}
      </ScrollSwiper>

      <ScrollHorizontal title={"인기 TV프로그램"}>
        {popular.map((show) => (
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

      <ScrollHorizontal title={"이번주에 뜨는 TV프로그램"}>
        {thisweek.map((show) => (
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

      <ScrollVertical title={"오늘 방영한 프로그램"}>
        {airingToday.map((show) => (
          <Vertical
            isTV={true}
            key={show.id}
            id={show.id}
            poster={show.poster_path}
            title={show.original_name}
            vote={show.vote_average}
            overView={show.overview}
          />
        ))}
      </ScrollVertical>
    </ScrollContainer>
  );
};

export default TVPresenter;
