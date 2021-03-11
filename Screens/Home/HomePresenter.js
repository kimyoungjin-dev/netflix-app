import React from "react";
import Horizontal from "../../Components/Horizontal";
import ScrollContainer from "../../Components/SlideContents/ScrollContainer";
import ScrollHorizontal from "../../Components/SlideContents/ScrollHorizontal";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CategoryContainer = styled.View`
  background-color: rgb(23, 25, 30);
  padding: 10px 0px;
`;

const CategoryList = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const CategoryItem = styled.Text`
  color: white;
  font-size: 20px;
`;

const MoviePresenter = ({
  loading,
  nowPlaying,
  popular,
  upcoming,

  topRated,
  showPopular,
  airingToday,
  thisweek,
}) => {
  const navigation = useNavigation();

  return (
    <>
      <CategoryContainer>
        <CategoryList>
          <TouchableOpacity onPress={() => navigation.navigate("TV")}>
            <CategoryItem>TV 프로그램</CategoryItem>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("영화")}>
            <CategoryItem>영화</CategoryItem>
          </TouchableOpacity>
          <TouchableOpacity>
            <CategoryItem>카테고리</CategoryItem>
          </TouchableOpacity>
        </CategoryList>
      </CategoryContainer>

      <ScrollContainer loading={loading}>
        <ScrollHorizontal title={"Netflix 인기 콘텐츠"}>
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

          {showPopular.map((show, index) => (
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

        <ScrollHorizontal title={"오늘 방영 프로그램"}>
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

        <ScrollHorizontal title={"방금 나온 신작영화"}>
          {upcoming.map((movie, index) => (
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

        <ScrollHorizontal title={"Top10 TV프로그램"}>
          {topRated.map((show, index) => (
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

        <ScrollHorizontal title={"지금 뜨고있는 영화"}>
          {nowPlaying.map((movie, index) => (
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

        <ScrollHorizontal title={"인기 영화"}>
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

        <ScrollHorizontal title={"이번주 인기 TV프로그램"}>
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
      </ScrollContainer>
    </>
  );
};

export default MoviePresenter;
