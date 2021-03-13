import React from "react";
import Horizontal from "../../Components/Horizontal";
import ScrollContainer from "../../Components/SlideContents/ScrollContainer";
import ScrollHorizontal from "../../Components/SlideContents/ScrollHorizontal";
import TVGenre from "../../Components/Home/TVGenre";
import Category from "../../Components/Home/Category";

const HomePresenter = ({
  moviePopular,
  showPopular,
  animation,
  variety,
  talk,
  drama,
  sfFantasy,
  actionAdventure,
  documentary,
  comedy,
  mystery,
  loading,
  movieCategory: { genres: movieGenre },
  showCategory: { genres: tvGenre },
  refreshing,
}) => {
  return (
    <>
      <Category movieGenre={movieGenre} tvGenre={tvGenre} />
      <ScrollContainer loading={loading} refreshing={refreshing}>
        <ScrollHorizontal title={"Netflix 인기 콘텐츠"}>
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

        <TVGenre
          animation={animation}
          variety={variety}
          talk={talk}
          drama={drama}
          sfFantasy={sfFantasy}
          actionAdventure={actionAdventure}
          documentary={documentary}
          comedy={comedy}
          mystery={mystery}
        />
      </ScrollContainer>
    </>
  );
};

export default HomePresenter;
