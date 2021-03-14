import React, { useState, useEffect } from "react";
import { apiTVGenre } from "../../api/TVGenreApi";
import ScrollHorizontal from "../SlideContents/ScrollHorizontal";
import Horizontal from "../Horizontal";

const STVGenre = () => {
  const [showGenreResult, setShowGenreResult] = useState({
    animation: [],
    variety: [],
    talk: [],
    drama: [],
    sfFantasy: [],
    actionAdventure: [],
    documentary: [],
    comedy: [],
    mystery: [],

    showPopularError: null,
    showCategoryError: null,
    animationError: null,
    varietyError: null,
    talkError: null,
    dramaError: null,
    sfFantasyError: null,
    actionAdventureError: null,
    documentaryError: null,
    comedyError: null,
    mysteryError: null,
  });

  const getData = async () => {
    const [animation, animationError] = await apiTVGenre.discoveryGenre(16);
    const [variety, varietyError] = await apiTVGenre.discoveryGenre(10764);
    const [talk, talkError] = await apiTVGenre.discoveryGenre(10767);
    const [drama, dramaError] = await apiTVGenre.discoveryGenre(18);
    const [sfFantasy, sfFantasyError] = await apiTVGenre.discoveryGenre(10765);
    const [
      actionAdventure,
      actionAdventureError,
    ] = await apiTVGenre.discoveryGenre(10759);
    const [documentary, documentaryError] = await apiTVGenre.discoveryGenre(99);
    const [comedy, comedyError] = await apiTVGenre.discoveryGenre(35);
    const [mystery, mysteryError] = await apiTVGenre.discoveryGenre(9648);

    setShowGenreResult({
      variety,
      talk,
      animation,
      drama,
      sfFantasy,
      actionAdventure,
      documentary,
      comedy,
      mystery,

      animationError,
      varietyError,
      talkError,
      dramaError,
      sfFantasyError,
      actionAdventureError,
      documentaryError,
      comedyError,
      mysteryError,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <ScrollHorizontal title={"애니메이션"}>
        {showGenreResult.animation?.map((show, index) => (
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
        {showGenreResult.variety?.map((show, index) => (
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

        {showGenreResult.talk?.map((show, index) => (
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
        {showGenreResult.drama.map((show, index) => (
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
        {showGenreResult.sfFantasy.map((show, index) => (
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
        {showGenreResult.actionAdventure.map((show, index) => (
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
        {showGenreResult.documentary.map((show, index) => (
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
        {showGenreResult.comedy.map((show, index) => (
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
        {showGenreResult.mystery.map((show, index) => (
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

export default STVGenre;
