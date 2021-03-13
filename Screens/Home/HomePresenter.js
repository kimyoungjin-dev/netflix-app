import React from "react";
import Horizontal from "../../Components/Horizontal";
import ScrollContainer from "../../Components/SlideContents/ScrollContainer";
import ScrollHorizontal from "../../Components/SlideContents/ScrollHorizontal";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TVGenre from "../../Components/Home/TVGenre";

const CategoryContainer = styled.View`
  padding: 10px 0px;
  flex-direction: row;
  background-color: black;
  justify-content: space-around;
`;

const CategoryList = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

const CategoryItem = styled.Text`
  color: white;
  font-size: 20px;
  padding-right: 20px;
`;

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
}) => {
  const navigation = useNavigation();

  return (
    <>
      <CategoryContainer>
        <CategoryList>
          <TouchableOpacity onPress={() => navigation.navigate("TV")}>
            <CategoryItem>TV 프로그램</CategoryItem>
          </TouchableOpacity>
        </CategoryList>

        <CategoryList>
          <TouchableOpacity onPress={() => navigation.navigate("영화")}>
            <CategoryItem>영화</CategoryItem>
          </TouchableOpacity>
        </CategoryList>

        <CategoryList>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Category", {
                movieGenre,
                tvGenre,
              })
            }
          >
            <CategoryItem>카테고리</CategoryItem>
          </TouchableOpacity>
        </CategoryList>
      </CategoryContainer>

      <ScrollContainer loading={loading}>
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
