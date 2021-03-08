import React from "react";
import Horizontal from "../../Components/Horizontal";
import Slide from "../../Components/Slide";
import ScrollContainer from "../../Components/SlideContents/ScrollContainer";
import ScrollHorizontal from "../../Components/SlideContents/ScrollHorizontal";
import ScrollSwiper from "../../Components/SlideContents/ScrollSwiper";
import ScrollVertical from "../../Components/SlideContents/ScrollVertical";
import Vertical from "../../Components/Vertical";

const TVPresenter = ({ topRated, popular, airingToday, thisweek, loading }) => {
  console.log(topRated);
  return (
    <ScrollContainer loading={loading}>
      <ScrollSwiper>
        {topRated.map((show) => (
          <Slide
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

      <ScrollHorizontal title={"Popular show.."}>
        {popular.map((show) => (
          <Horizontal
            key={show.id}
            id={show.id}
            poster={show.poster_path}
            title={show.original_name}
            vote={show.vote_average}
          />
        ))}
      </ScrollHorizontal>

      <ScrollHorizontal title={"this week show!"}>
        {thisweek.map((show) => (
          <Horizontal
            key={show.id}
            id={show.id}
            poster={show.poster_path}
            title={show.original_name}
            vote={show.vote_average}
          />
        ))}
      </ScrollHorizontal>

      <ScrollVertical title={"Today show"}>
        {airingToday.map((show) => (
          <Vertical
            key={show.id}
            id={show.id}
            poster={show.poster_path}
            title={show.original_title}
            vote={show.vote_average}
            overView={show.overview}
          />
        ))}
      </ScrollVertical>
    </ScrollContainer>
  );
};

export default TVPresenter;
