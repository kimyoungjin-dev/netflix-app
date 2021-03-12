import React from "react";
import Horizontal from "../Horizontal";
import ScrollHorizontal from "../SlideContents/ScrollHorizontal";

const TVGenre = ({
  animation,
  variety,
  talk,
  drama,
  sfFantasy,
  actionAdventure,
  documentary,
  comedy,
  mystery,
}) => {
  return (
    <>
      <ScrollHorizontal title={"애니메이션"}>
        {animation?.map((show, index) => (
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

      <ScrollHorizontal title={"리얼리티,버라이어티 & 토크쇼"}>
        {variety?.map((show, index) => (
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

        {talk?.map((show, index) => (
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

      <ScrollHorizontal title={"TV 드라마"}>
        {drama.map((show, index) => (
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

      <ScrollHorizontal title={"SF 판타지"}>
        {sfFantasy.map((show, index) => (
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

      <ScrollHorizontal title={"액션&어드벤쳐"}>
        {actionAdventure.map((show, index) => (
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

      <ScrollHorizontal title={"다큐멘터리"}>
        {documentary.map((show, index) => (
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

      <ScrollHorizontal title={"코미디"}>
        {comedy.map((show, index) => (
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

      <ScrollHorizontal title={"미스테리"}>
        {mystery.map((show, index) => (
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
    </>
  );
};

export default TVGenre;
